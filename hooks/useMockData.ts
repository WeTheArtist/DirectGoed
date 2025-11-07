import { useState, useMemo } from 'react';
import { Request, Charity, ItemType, RequestStatus, NewRequestData } from '../types';

const mockCharities: Charity[] = [
  { id: 'charity1', name: 'Stichting Hulp en Handen', verified: true },
  { id: 'charity2', name: 'Gemeenschap Zorgproject', verified: true },
  { id: 'charity3', name: 'Nieuwe Start', verified: false },
  { id: 'charity4', name: 'Stedelijk Ondersteuningsnetwerk', verified: true },
];

const mockRequests: Request[] = [
  {
    id: 'req1',
    charity: mockCharities[0],
    familyName: 'De Wit Familie',
    itemType: ItemType.Fridge,
    cost: 750,
    fundedAmount: 350,
    description: 'Een nieuwe, energiezuinige koelkast om vers voedsel in te bewaren.',
    story: 'De familie De Wit, met drie jonge kinderen, zit al weken zonder werkende koelkast. Dit maakt het een uitdaging om gezond voedsel vers te houden, wat hun welzijn beïnvloedt. Een nieuwe koelkast zou een wereld van verschil maken.',
    location: 'Amsterdam, NL',
    imageUrl: 'https://picsum.photos/seed/fridge1/600/400',
    status: RequestStatus.Approved,
    urgency: 'High',
  },
  {
    id: 'req2',
    charity: mockCharities[1],
    familyName: 'Mevr. Jansen',
    itemType: ItemType.WashingMachine,
    cost: 600,
    fundedAmount: 600,
    description: 'Een betrouwbare wasmachine voor een oudere dame.',
    story: 'Mevrouw Jansen is 82 jaar en woont alleen. Haar oude wasmachine is kapot en ze kan haar kleren niet meer met de hand wassen. Een nieuwe machine zou haar helpen haar onafhankelijkheid en waardigheid te behouden.',
    location: 'Utrecht, NL',
    imageUrl: 'https://picsum.photos/seed/washer1/600/400',
    status: RequestStatus.Funded,
    urgency: 'Medium',
  },
  {
    id: 'req3',
    charity: mockCharities[3],
    familyName: 'De Bakker Huishouden',
    itemType: ItemType.Stove,
    cost: 800,
    fundedAmount: 100,
    description: 'Een veilig en functioneel fornuis voor een eenoudergezin.',
    story: 'Maria Bakker is een alleenstaande moeder van twee die graag voor haar kinderen kookt. Hun huidige fornuis is oud en heeft verschillende veiligheidsproblemen. Een nieuw fornuis zou haar in staat stellen om zonder zorgen warme, voedzame maaltijden te bereiden.',
    location: 'Rotterdam, NL',
    imageUrl: 'https://picsum.photos/seed/stove1/600/400',
    status: RequestStatus.Approved,
    urgency: 'High',
  },
    {
    id: 'req4',
    charity: mockCharities[0],
    familyName: 'Student Pieter',
    itemType: ItemType.Laptop,
    cost: 550,
    fundedAmount: 550,
    description: 'Een laptop voor een student om zijn studie te kunnen volgen.',
    story: 'Pieter is een ijverige student, maar zijn oude laptop heeft het begeven. Zonder laptop kan hij zijn opdrachten niet maken en online lessen niet volgen. Een nieuwe laptop is essentieel voor zijn toekomst.',
    location: 'Groningen, NL',
    imageUrl: 'https://picsum.photos/seed/laptop1/600/400',
    status: RequestStatus.Delivered,
    urgency: 'Low',
  },
  {
    id: 'req5',
    charity: mockCharities[1],
    familyName: 'De Visser Familie',
    itemType: ItemType.Stroller,
    cost: 250,
    fundedAmount: 100,
    description: 'Een stevige kinderwagen voor een gezin met een pasgeboren baby.',
    story: 'De familie Visser heeft net een pasgeboren baby verwelkomd. Ze hebben geen kinderwagen, wat het moeilijk maakt om met de baby naar buiten te gaan voor afspraken en frisse lucht. Een kinderwagen is dringend nodig.',
    location: 'Eindhoven, NL',
    imageUrl: 'https://picsum.photos/seed/stroller1/600/400',
    status: RequestStatus.Approved,
    urgency: 'High',
  },
  {
    id: 'req6',
    charity: mockCharities[3],
    familyName: 'Dhr. van Dijk',
    itemType: ItemType.Bed,
    cost: 400,
    fundedAmount: 50,
    description: 'Een comfortabel bed voor een veteraan.',
    story: 'Dhr. van Dijk, een veteraan die in een kleine studio woont, slaapt al maanden op een oude, versleten matras. Dit veroorzaakt rugpijn en slapeloze nachten. Een nieuw bed zou zijn levenskwaliteit aanzienlijk verbeteren.',
    location: 'Maastricht, NL',
    imageUrl: 'https://picsum.photos/seed/bed1/600/400',
    status: RequestStatus.Approved,
    urgency: 'Medium',
  },
];

export const useMockData = () => {
    const [requests, setRequests] = useState<Request[]>(mockRequests);
    const [charities] = useState<Charity[]>(mockCharities);

    const findRequestById = (id: string | null) => {
        if (!id) return undefined;
        return requests.find(req => req.id === id);
    };

    const addRequest = (data: NewRequestData, charity: Charity) => {
        const newRequest: Request = {
            id: `req${requests.length + 1}${Date.now()}`,
            charity,
            familyName: data.familyName,
            itemType: data.itemType,
            cost: data.cost,
            fundedAmount: 0,
            description: data.story,
            story: data.story,
            location: data.location,
            imageUrl: `https://picsum.photos/seed/new${requests.length + 1}/600/400`,
            status: RequestStatus.Pending,
            urgency: 'Medium',
        };
        setRequests(prevRequests => [newRequest, ...prevRequests]);
    };
    
    const locations = useMemo(() => Array.from(new Set(requests.map(r => r.location).sort())), [requests]);
    const itemTypes = useMemo(() => Object.values(ItemType), []);

    return { requests, charities, findRequestById, locations, itemTypes, addRequest };
};