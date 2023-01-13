export interface Travel {
    id: number;
    userId: number;
    origin: string;
    destination: string;
    startDate: Date;
    endDate: Date;
    budget: number;
    notes: string;
    images: string[];
    itinerary: ItineraryItem[];
    transportation: Transportation;
    accomodation: Accomodation;
    visa: Visa;
    activities: Activities[];
    packList: PackList[];
    travelInsurance: TravelInsurance;
    createdAt: Date;
    modifiedAt: Date;
  }
  
  export interface ItineraryItem {
    dayNumber: number;
    description: string;
  }
  
  export interface Transportation {
    type: string;
    departureTime: Date;
    arrivalTime: Date;
    cost: number;
  }
  
  export interface Accomodation {
    name: string;
    address: string;
    checkIn: Date;
    checkOut: Date;
    cost: number;
  }
  
  export interface Visa {
    required: boolean;
    details: string;
  }
  
  export interface Activities {
    name: string;
    description: string;
  }
  
  export interface PackList {
    item: string;
    quantity: number;
  }
  
  export interface TravelInsurance {
    provider: string;
    policyNumber: string;
    validFrom: Date;
    validTo: Date;
  }
  