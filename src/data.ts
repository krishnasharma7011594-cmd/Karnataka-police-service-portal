export interface Accused {
  id: string;
  name: string;
  alias: string | null;
  age: number | null;
  phone: string | null;
  vehicle: string | null;
  aadhaar_last4: string | null;
  address: string | null;
  prior_cases: number;
}

export interface Victim {
  name: string;
  age: number | null;
  phone: string | null;
  address: string | null;
}

export interface FirCase {
  fir_no: string;
  date: string;
  time: string;
  crime_type: string;
  sub_type: string;
  ipc_sections?: string[];
  district: string;
  ps: string;
  location?: string;
  lat: number;
  lng: number;
  accused: Accused[];
  victim?: Victim | null;
  property_lost?: string | null;
  status?: string;
  officer?: string;
  linked_firs?: string[];
  modus_operandi?: string;
  arrest_made?: boolean;
  arrest_date?: string | null;
  seized_contraband?: string;
}

export interface NetworkConnection {
  source: string;
  target: string;
  type: string;
  strength: string;
}

export interface Hotspot {
  area: string;
  lat: number;
  lng: number;
  crime_count: number;
  dominant_crime: string;
  risk_level: string;
  pattern: string;
}

export interface MonthlyTrend {
  month: string;
  total: number;
  theft: number;
  burglary: number;
  cybercrime: number;
  robbery: number;
  murder: number;
  drugs: number;
  other: number;
}

export interface RepeatOffender {
  id: string;
  name: string;
  alias: string | null;
  total_firs: number;
  crime_type: string;
  districts_active: string[];
  status: string;
  risk_score: number;
}

export interface CrimeDataset {
  metadata: {
    generated: string;
    total_firs: number;
    districts: string[];
    source: string;
  };
  firs: FirCase[];
  network_connections: NetworkConnection[];
  hotspots: Hotspot[];
  monthly_trends: MonthlyTrend[];
  repeat_offenders: RepeatOffender[];
}

export const CRIME_DATA: CrimeDataset = {
  "metadata": {
    "generated": "2026-05-30",
    "total_firs": 60,
    "districts": ["Bengaluru Urban", "Bengaluru Rural", "Mysuru", "Mangaluru", "Hubli-Dharwad", "Belagavi", "Kalaburagi"],
    "source": "KSP Intel Synthetic Dataset v1.0"
  },

  "firs": [
    {
      "fir_no": "KSP/BLR/2026/0001",
      "date": "2026-01-03",
      "time": "14:30",
      "crime_type": "Theft",
      "sub_type": "Chain Snatching",
      "ipc_sections": ["379", "356"],
      "district": "Bengaluru Urban",
      "ps": "Jayanagar PS",
      "location": "Jayanagar 4th Block, 11th Main",
      "lat": 12.9308,
      "lng": 77.5832,
      "accused": [
        { "id": "ACC001", "name": "Ravi Kumar", "alias": "Ravi Chain", "age": 28, "phone": "9845001234", "vehicle": "KA-05-BB-4737", "aadhaar_last4": "7823", "address": "Kengeri, Bengaluru", "prior_cases": 3 }
      ],
      "victim": { "name": "Lakshmi Reddy", "age": 55, "phone": "9900112233", "address": "Jayanagar 3rd Block" },
      "property_lost": "Gold chain 22g approx ₹85,000",
      "status": "Charge Sheeted",
      "officer": "SI Prakash M",
      "linked_firs": ["KSP/BLR/2026/0008", "KSP/BLR/2026/0015", "KSP/BLR/2026/0022"],
      "modus_operandi": "Pillion rider on motorcycle snatches chain from pedestrian woman at signal",
      "arrest_made": true,
      "arrest_date": "2026-01-10"
    },
    {
      "fir_no": "KSP/BLR/2026/0002",
      "date": "2026-01-05",
      "time": "02:15",
      "crime_type": "Burglary",
      "sub_type": "House Breaking",
      "ipc_sections": ["457", "380"],
      "district": "Bengaluru Urban",
      "ps": "HSR Layout PS",
      "location": "HSR Layout Sector 2, 27th Main",
      "lat": 12.9116,
      "lng": 77.6389,
      "accused": [
        { "id": "ACC002", "name": "Suresh Patil", "alias": "Suresh Lock", "age": 34, "phone": "9741009876", "vehicle": "KA-03-MN-8821", "aadhaar_last4": "4421", "address": "Anekal, Bengaluru", "prior_cases": 5 },
        { "id": "ACC003", "name": "Manoj Gowda", "alias": "Manoj Key", "age": 31, "phone": "9632001122", "vehicle": "KA-03-MN-8821", "aadhaar_last4": "9901", "address": "Anekal, Bengaluru", "prior_cases": 4 }
      ],
      "victim": { "name": "Arjun Sharma", "age": 42, "phone": "9886001122", "address": "HSR Layout Sector 2" },
      "property_lost": "Laptop Dell XPS ₹95,000, Cash ₹45,000, Jewelry ₹2,10,000",
      "status": "Under Investigation",
      "officer": "SI Rekha N",
      "linked_firs": ["KSP/BLR/2026/0011", "KSP/BLR/2026/0019", "KSP/BLR/2026/0031"],
      "modus_operandi": "Lock picking during late night, two person team, entry from rear window",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0003",
      "date": "2026-01-07",
      "time": "11:45",
      "crime_type": "Cybercrime",
      "sub_type": "Online Banking Fraud",
      "ipc_sections": ["419", "420", "66C", "66D"],
      "district": "Bengaluru Urban",
      "ps": "CEN PS (Cybercrime)",
      "location": "Koramangala 5th Block",
      "lat": 12.9352,
      "lng": 77.6245,
      "accused": [
        { "id": "ACC004", "name": "Vikram Singh", "alias": "Vicky OTP", "age": 26, "phone": "8971234560", "vehicle": null, "aadhaar_last4": "3310", "address": "Jharkhand (arrested via cybercell)", "prior_cases": 7 }
      ],
      "victim": { "name": "Preethi Nair", "age": 38, "phone": "9945001122", "address": "Koramangala 6th Block" },
      "property_lost": "₹3,45,000 transferred via UPI fraud",
      "status": "Charge Sheeted",
      "officer": "ASI Deepak R",
      "linked_firs": ["KSP/BLR/2026/0009", "KSP/BLR/2026/0023", "KSP/MYS/2026/0044"],
      "modus_operandi": "Fake KYC call, OTP extraction, immediate fund transfer to mule accounts",
      "arrest_made": true,
      "arrest_date": "2026-02-02"
    },
    {
      "fir_no": "KSP/BLR/2026/0004",
      "date": "2026-01-09",
      "time": "20:00",
      "crime_type": "Assault",
      "sub_type": "Road Rage",
      "ipc_sections": ["323", "324", "506"],
      "district": "Bengaluru Urban",
      "ps": "Whitefield PS",
      "location": "Whitefield Main Road near ITPL",
      "lat": 12.9698,
      "lng": 77.7499,
      "accused": [
        { "id": "ACC005", "name": "Ajay Hegde", "alias": null, "age": 32, "phone": "7760001122", "vehicle": "KA-51-AM-9988", "aadhaar_last4": "5512", "address": "Whitefield, Bengaluru", "prior_cases": 1 }
      ],
      "victim": { "name": "Ramesh Babu", "age": 45, "phone": "9980001234", "address": "Marathahalli, Bengaluru" },
      "property_lost": null,
      "status": "Closed - Compromise",
      "officer": "SI Anitha K",
      "linked_firs": [],
      "modus_operandi": "Argument over lane cutting, physical assault with blunt object",
      "arrest_made": true,
      "arrest_date": "2026-01-09"
    },
    {
      "fir_no": "KSP/BLR/2026/0005",
      "date": "2026-01-12",
      "time": "08:30",
      "crime_type": "Robbery",
      "sub_type": "ATM Robbery",
      "ipc_sections": ["392", "394"],
      "district": "Bengaluru Urban",
      "ps": "Shivajinagar PS",
      "location": "MG Road, SBI ATM near Brigade Road",
      "lat": 12.9752,
      "lng": 77.6108,
      "accused": [
        { "id": "ACC006", "name": "Imran Khan", "alias": "Imran Blade", "age": 24, "phone": "9611001234", "vehicle": "KA-02-P-3344", "aadhaar_last4": "8823", "address": "Shivajinagar area", "prior_cases": 2 },
        { "id": "ACC007", "name": "Salman Shaikh", "alias": null, "age": 22, "phone": "9611005678", "vehicle": "KA-02-P-3344", "aadhaar_last4": "2201", "address": "Frazer Town", "prior_cases": 0 }
      ],
      "victim": { "name": "Gopal Das", "age": 60, "phone": "9448001234", "address": "Indiranagar, Bengaluru" },
      "property_lost": "Cash ₹22,000 withdrawn from ATM",
      "status": "Charge Sheeted",
      "officer": "CI Mohan S",
      "linked_firs": ["KSP/BLR/2026/0017"],
      "modus_operandi": "Follows victim from ATM, threatens with knife, snatches cash",
      "arrest_made": true,
      "arrest_date": "2026-01-14"
    },
    {
      "fir_no": "KSP/BLR/2026/0006",
      "date": "2026-01-14",
      "time": "16:00",
      "crime_type": "Drug Trafficking",
      "sub_type": "NDPS - Ganja",
      "ipc_sections": ["20(b)(ii)(B) NDPS Act"],
      "district": "Bengaluru Urban",
      "ps": "DJ Halli PS",
      "location": "DJ Halli, Near Old Bus Stand",
      "lat": 12.9833,
      "lng": 77.6167,
      "accused": [
        { "id": "ACC008", "name": "Peer Mohammad", "alias": "Peer Maali", "age": 35, "phone": "9945501234", "vehicle": null, "aadhaar_last4": "6634", "address": "DJ Halli, Bengaluru", "prior_cases": 4 }
      ],
      "victim": null,
      "property_lost": null,
      "status": "Charge Sheeted",
      "officer": "SI Shankar B",
      "linked_firs": ["KSP/BLR/2026/0028", "KSP/BLR/2026/0039"],
      "modus_operandi": "Supply chain from Andhra Pradesh via courier, local distribution network",
      "arrest_made": true,
      "arrest_date": "2026-01-14",
      "seized_contraband": "Ganja 3.2 kg, Cash ₹15,000"
    },
    {
      "fir_no": "KSP/BLR/2026/0007",
      "date": "2026-01-16",
      "time": "22:45",
      "crime_type": "Murder",
      "sub_type": "Intentional Homicide",
      "ipc_sections": ["302", "34"],
      "district": "Bengaluru Urban",
      "ps": "Banaswadi PS",
      "location": "Banaswadi Main Road, Near Tin Factory",
      "lat": 13.0102,
      "lng": 77.6546,
      "accused": [
        { "id": "ACC009", "name": "Raju Naik", "alias": "Raju Knife", "age": 30, "phone": "8880001234", "vehicle": "KA-09-C-7788", "aadhaar_last4": "1123", "address": "Banaswadi, Bengaluru", "prior_cases": 3 },
        { "id": "ACC010", "name": "Santhosh Kumar", "alias": "Santu", "age": 28, "phone": "8880005678", "vehicle": null, "aadhaar_last4": "3344", "address": "Kammanahalli", "prior_cases": 2 }
      ],
      "victim": { "name": "Murugan R", "age": 35, "phone": "9900551234", "address": "Banaswadi, Bengaluru" },
      "property_lost": null,
      "status": "Under Investigation",
      "officer": "DySP Venkatesh M",
      "linked_firs": ["KSP/BLR/2026/0012"],
      "modus_operandi": "Gang rivalry, stabbing with sharp weapon, late night attack",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0008",
      "date": "2026-01-20",
      "time": "15:00",
      "crime_type": "Theft",
      "sub_type": "Chain Snatching",
      "ipc_sections": ["379", "356"],
      "district": "Bengaluru Urban",
      "ps": "JP Nagar PS",
      "location": "JP Nagar Phase 2, 15th Cross",
      "lat": 12.9063,
      "lng": 77.5857,
      "accused": [
        { "id": "ACC001", "name": "Ravi Kumar", "alias": "Ravi Chain", "age": 28, "phone": "9845001234", "vehicle": "KA-05-BB-4737", "aadhaar_last4": "7823", "address": "Kengeri, Bengaluru", "prior_cases": 3 }
      ],
      "victim": { "name": "Sunita Devi", "age": 62, "phone": "9844001122", "address": "JP Nagar Phase 3" },
      "property_lost": "Gold chain 18g approx ₹65,000",
      "status": "Charge Sheeted",
      "officer": "SI Kavitha R",
      "linked_firs": ["KSP/BLR/2026/0001", "KSP/BLR/2026/0015", "KSP/BLR/2026/0022"],
      "modus_operandi": "Pillion rider on motorcycle snatches chain from pedestrian woman at signal",
      "arrest_made": true,
      "arrest_date": "2026-01-10"
    },
    {
      "fir_no": "KSP/BLR/2026/0009",
      "date": "2026-01-22",
      "time": "14:00",
      "crime_type": "Cybercrime",
      "sub_type": "Online Banking Fraud",
      "ipc_sections": ["419", "420", "66C", "66D"],
      "district": "Bengaluru Urban",
      "ps": "CEN PS (Cybercrime)",
      "location": "Indiranagar 100 Feet Road",
      "lat": 12.9784,
      "lng": 77.6408,
      "accused": [
        { "id": "ACC004", "name": "Vikram Singh", "alias": "Vicky OTP", "age": 26, "phone": "8971234560", "vehicle": null, "aadhaar_last4": "3310", "address": "Jharkhand", "prior_cases": 7 }
      ],
      "victim": { "name": "Krishnamurthy T", "age": 65, "phone": "9480001122", "address": "Indiranagar" },
      "property_lost": "₹2,80,000 via UPI fraud",
      "status": "Charge Sheeted",
      "officer": "ASI Deepak R",
      "linked_firs": ["KSP/BLR/2026/0003", "KSP/BLR/2026/0023"],
      "modus_operandi": "Fake bank call, OTP extraction, funds transferred to mule accounts",
      "arrest_made": true,
      "arrest_date": "2026-02-02"
    },
    {
      "fir_no": "KSP/BLR/2026/0010",
      "date": "2026-01-25",
      "time": "01:30",
      "crime_type": "Vehicle Theft",
      "sub_type": "Two-Wheeler Theft",
      "ipc_sections": ["379"],
      "district": "Bengaluru Urban",
      "ps": "Madiwala PS",
      "location": "Madiwala Market Area",
      "lat": 12.9225,
      "lng": 77.6160,
      "accused": [
        { "id": "ACC011", "name": "Unknown", "alias": null, "age": null, "phone": null, "vehicle": null, "aadhaar_last4": null, "address": null, "prior_cases": 0 }
      ],
      "victim": { "name": "Anil Raj", "age": 28, "phone": "9741001122", "address": "BTM Layout" },
      "property_lost": "Honda Activa KA-05-HZ-3321 ₹75,000",
      "status": "Under Investigation",
      "officer": "SI Suresh B",
      "linked_firs": ["KSP/BLR/2026/0018", "KSP/BLR/2026/0026"],
      "modus_operandi": "Duplicate key used on unguarded parking near market",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0011",
      "date": "2026-01-28",
      "time": "03:00",
      "crime_type": "Burglary",
      "sub_type": "House Breaking",
      "ipc_sections": ["457", "380"],
      "district": "Bengaluru Urban",
      "ps": "Koramangala PS",
      "location": "Koramangala 7th Block",
      "lat": 12.9279,
      "lng": 77.6271,
      "accused": [
        { "id": "ACC002", "name": "Suresh Patil", "alias": "Suresh Lock", "age": 34, "phone": "9741009876", "vehicle": "KA-03-MN-8821", "aadhaar_last4": "4421", "address": "Anekal", "prior_cases": 5 },
        { "id": "ACC003", "name": "Manoj Gowda", "alias": "Manoj Key", "age": 31, "phone": "9632001122", "vehicle": "KA-03-MN-8821", "aadhaar_last4": "9901", "address": "Anekal", "prior_cases": 4 }
      ],
      "victim": { "name": "Deepa Menon", "age": 39, "phone": "9880001234", "address": "Koramangala 7th Block" },
      "property_lost": "Laptop ₹80,000, iPad ₹55,000, Cash ₹30,000, Gold ₹1,50,000",
      "status": "Under Investigation",
      "officer": "SI Rekha N",
      "linked_firs": ["KSP/BLR/2026/0002", "KSP/BLR/2026/0019", "KSP/BLR/2026/0031"],
      "modus_operandi": "Lock picking during late night, two person team",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0012",
      "date": "2026-02-01",
      "time": "23:30",
      "crime_type": "Assault",
      "sub_type": "Grievous Hurt",
      "ipc_sections": ["326", "34"],
      "district": "Bengaluru Urban",
      "ps": "Banaswadi PS",
      "location": "Kammanahalli Main Road",
      "lat": 13.0023,
      "lng": 77.6479,
      "accused": [
        { "id": "ACC009", "name": "Raju Naik", "alias": "Raju Knife", "age": 30, "phone": "8880001234", "vehicle": "KA-09-C-7788", "aadhaar_last4": "1123", "address": "Banaswadi", "prior_cases": 3 }
      ],
      "victim": { "name": "Venkat Reddy", "age": 30, "phone": "9945001233", "address": "Kammanahalli" },
      "property_lost": null,
      "status": "Charge Sheeted",
      "officer": "DySP Venkatesh M",
      "linked_firs": ["KSP/BLR/2026/0007"],
      "modus_operandi": "Gang related stabbing, sharp weapon, night time",
      "arrest_made": true,
      "arrest_date": "2026-02-03"
    },
    {
      "fir_no": "KSP/BLR/2026/0013",
      "date": "2026-02-03",
      "time": "10:00",
      "crime_type": "Fraud",
      "sub_type": "Real Estate Fraud",
      "ipc_sections": ["420", "406", "120B"],
      "district": "Bengaluru Urban",
      "ps": "Yelahanka PS",
      "location": "Yelahanka New Town",
      "lat": 13.1005,
      "lng": 77.5946,
      "accused": [
        { "id": "ACC012", "name": "Chandrashekar BV", "alias": "Chandu Builder", "age": 48, "phone": "9980009001", "vehicle": "KA-51-N-4455", "aadhaar_last4": "7701", "address": "Hebbal, Bengaluru", "prior_cases": 2 }
      ],
      "victim": { "name": "Multiple victims (14 families)", "age": null, "phone": "9900001111", "address": "Various" },
      "property_lost": "₹3.2 Crore total (advance for non-existent plots)",
      "status": "Under Investigation",
      "officer": "CI Ramamurthy K",
      "linked_firs": ["KSP/BLR/2026/0034"],
      "modus_operandi": "Fake land documents, collected advance from multiple buyers for same plot",
      "arrest_made": true,
      "arrest_date": "2026-02-20"
    },
    {
      "fir_no": "KSP/BLR/2026/0014",
      "date": "2026-02-06",
      "time": "07:00",
      "crime_type": "Kidnapping",
      "sub_type": "Abduction for Ransom",
      "ipc_sections": ["363", "364A"],
      "district": "Bengaluru Rural",
      "ps": "Nelamangala PS",
      "location": "Nelamangala Highway NH-48",
      "lat": 13.0985,
      "lng": 77.3906,
      "accused": [
        { "id": "ACC013", "name": "Unknown Gang (3 members)", "alias": null, "age": null, "phone": "7019001234", "vehicle": "KA-11-F-5566 (stolen)", "aadhaar_last4": null, "address": null, "prior_cases": 0 }
      ],
      "victim": { "name": "Ravindra S (businessman)", "age": 52, "phone": "9880112233", "address": "Rajajinagar, Bengaluru" },
      "property_lost": "Ransom demand ₹50 Lakhs (rescued before payment)",
      "status": "Charge Sheeted",
      "officer": "SP Bengaluru Rural",
      "linked_firs": [],
      "modus_operandi": "Intercepted vehicle on highway, forced into another vehicle, held in farmhouse",
      "arrest_made": true,
      "arrest_date": "2026-02-09"
    },
    {
      "fir_no": "KSP/BLR/2026/0015",
      "date": "2026-02-10",
      "time": "16:45",
      "crime_type": "Theft",
      "sub_type": "Chain Snatching",
      "ipc_sections": ["379", "356"],
      "district": "Bengaluru Urban",
      "ps": "Banashankari PS",
      "location": "Banashankari 2nd Stage Bus Stop",
      "lat": 12.9254,
      "lng": 77.5468,
      "accused": [
        { "id": "ACC001", "name": "Ravi Kumar", "alias": "Ravi Chain", "age": 28, "phone": "9845001234", "vehicle": "KA-05-BB-4737", "aadhaar_last4": "7823", "address": "Kengeri", "prior_cases": 3 }
      ],
      "victim": { "name": "Savitha G", "age": 50, "phone": "9845112200", "address": "Banashankari 3rd Stage" },
      "property_lost": "Gold chain + earrings approx ₹1,10,000",
      "status": "Charge Sheeted",
      "officer": "SI Kavitha R",
      "linked_firs": ["KSP/BLR/2026/0001", "KSP/BLR/2026/0008", "KSP/BLR/2026/0022"],
      "modus_operandi": "Pillion rider on motorcycle snatches chain from pedestrian woman at signal",
      "arrest_made": true,
      "arrest_date": "2026-01-10"
    },
    {
      "fir_no": "KSP/BLR/2026/0016",
      "date": "2026-02-14",
      "time": "21:00",
      "crime_type": "Domestic Violence",
      "sub_type": "Physical Abuse",
      "ipc_sections": ["498A", "323", "506"],
      "district": "Bengaluru Urban",
      "ps": "Rajajinagar PS",
      "location": "Rajajinagar 2nd Block",
      "lat": 12.9875,
      "lng": 77.5503,
      "accused": [
        { "id": "ACC014", "name": "Prakash Shetty", "alias": null, "age": 38, "phone": "9844221133", "vehicle": "KA-09-MJ-6677", "aadhaar_last4": "2211", "address": "Rajajinagar 2nd Block", "prior_cases": 1 }
      ],
      "victim": { "name": "Kavya Shetty", "age": 33, "phone": "9900441122", "address": "Same address" },
      "property_lost": null,
      "status": "Charge Sheeted",
      "officer": "Lady SI Priya K",
      "linked_firs": [],
      "modus_operandi": "Repeated domestic violence, alcohol-related",
      "arrest_made": true,
      "arrest_date": "2026-02-15"
    },
    {
      "fir_no": "KSP/BLR/2026/0017",
      "date": "2026-02-18",
      "time": "08:00",
      "crime_type": "Robbery",
      "sub_type": "ATM Robbery",
      "ipc_sections": ["392"],
      "district": "Bengaluru Urban",
      "ps": "Commercial Street PS",
      "location": "Commercial Street, HDFC ATM",
      "lat": 12.9815,
      "lng": 77.6068,
      "accused": [
        { "id": "ACC006", "name": "Imran Khan", "alias": "Imran Blade", "age": 24, "phone": "9611001234", "vehicle": "KA-02-P-3344", "aadhaar_last4": "8823", "address": "Shivajinagar area", "prior_cases": 2 }
      ],
      "victim": { "name": "Meena Kumari", "age": 45, "phone": "9741221100", "address": "Shivajinagar" },
      "property_lost": "Cash ₹18,000",
      "status": "Charge Sheeted",
      "officer": "CI Mohan S",
      "linked_firs": ["KSP/BLR/2026/0005"],
      "modus_operandi": "Follows victim from ATM, threatens, snatches cash",
      "arrest_made": true,
      "arrest_date": "2026-01-14"
    },
    {
      "fir_no": "KSP/BLR/2026/0018",
      "date": "2026-02-20",
      "time": "02:00",
      "crime_type": "Vehicle Theft",
      "sub_type": "Two-Wheeler Theft",
      "ipc_sections": ["379"],
      "district": "Bengaluru Urban",
      "ps": "BTM Layout PS",
      "location": "BTM Layout 2nd Stage",
      "lat": 12.9165,
      "lng": 77.6101,
      "accused": [
        { "id": "ACC011", "name": "Unknown", "alias": null, "age": null, "phone": null, "vehicle": null, "aadhaar_last4": null, "address": null, "prior_cases": 0 }
      ],
      "victim": { "name": "Kiran Raj", "age": 25, "phone": "9632001199", "address": "BTM 2nd Stage" },
      "property_lost": "TVS Apache KA-05-FT-9980 ₹85,000",
      "status": "Under Investigation",
      "officer": "SI Suresh B",
      "linked_firs": ["KSP/BLR/2026/0010", "KSP/BLR/2026/0018"],
      "modus_operandi": "Duplicate key used in apartment parking area",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0019",
      "date": "2026-02-24",
      "time": "02:30",
      "crime_type": "Burglary",
      "sub_type": "House Breaking",
      "ipc_sections": ["457", "380"],
      "district": "Bengaluru Urban",
      "ps": "Wilson Garden PS",
      "location": "Wilson Garden, 3rd Cross",
      "lat": 12.9498,
      "lng": 77.5946,
      "accused": [
        { "id": "ACC002", "name": "Suresh Patil", "alias": "Suresh Lock", "age": 34, "phone": "9741009876", "vehicle": "KA-03-MN-8821", "aadhaar_last4": "4421", "address": "Anekal", "prior_cases": 5 },
        { "id": "ACC003", "name": "Manoj Gowda", "alias": "Manoj Key", "age": 31, "phone": "9632001122", "vehicle": "KA-03-MN-8821", "aadhaar_last4": "9901", "address": "Anekal", "prior_cases": 4 }
      ],
      "victim": { "name": "Subbanna MR", "age": 55, "phone": "9845001199", "address": "Wilson Garden" },
      "property_lost": "Cash ₹85,000, Laptop ₹70,000, Gold ₹95,000",
      "status": "Under Investigation",
      "officer": "SI Rekha N",
      "linked_firs": ["KSP/BLR/2026/0002", "KSP/BLR/2026/0011", "KSP/BLR/2026/0031"],
      "modus_operandi": "Lock picking, late night, two member team",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0020",
      "date": "2026-02-27",
      "time": "12:00",
      "crime_type": "Cybercrime",
      "sub_type": "Social Media Fraud",
      "ipc_sections": ["66C", "66D", "420"],
      "district": "Bengaluru Urban",
      "ps": "CEN PS (Cybercrime)",
      "location": "Electronic City",
      "lat": 12.8452,
      "lng": 77.6602,
      "accused": [
        { "id": "ACC015", "name": "Unknown (IP traced to Rajasthan)", "alias": null, "age": null, "phone": "9001234560", "vehicle": null, "aadhaar_last4": null, "address": "Rajasthan", "prior_cases": 0 }
      ],
      "victim": { "name": "Harsha Vardhan", "age": 29, "phone": "9880441122", "address": "Electronic City Phase 1" },
      "property_lost": "₹1,50,000 via fake job offer online",
      "status": "Under Investigation",
      "officer": "ASI Deepak R",
      "linked_firs": ["KSP/BLR/2026/0033"],
      "modus_operandi": "Fake HR WhatsApp message, online interview, fees collected, job never given",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0021",
      "date": "2026-03-02",
      "time": "18:30",
      "crime_type": "Theft",
      "sub_type": "Pickpocketing",
      "ipc_sections": ["379"],
      "district": "Bengaluru Urban",
      "ps": "Majestic PS",
      "location": "KSR Railway Station, Majestic",
      "lat": 12.9772,
      "lng": 77.5711,
      "accused": [
        { "id": "ACC016", "name": "Ramu alias Rocky", "alias": "Rocky", "age": 22, "phone": null, "vehicle": null, "aadhaar_last4": null, "address": "Majestic area", "prior_cases": 6 }
      ],
      "victim": { "name": "Shanthamma", "age": 48, "phone": "9480001133", "address": "Tumkur" },
      "property_lost": "Purse with ₹12,000 cash and ATM cards",
      "status": "Closed - Compromise",
      "officer": "SI Manjunath P",
      "linked_firs": [],
      "modus_operandi": "Crowded railway station pickpocketing gang",
      "arrest_made": true,
      "arrest_date": "2026-03-02"
    },
    {
      "fir_no": "KSP/BLR/2026/0022",
      "date": "2026-03-05",
      "time": "14:15",
      "crime_type": "Theft",
      "sub_type": "Chain Snatching",
      "ipc_sections": ["379", "356"],
      "district": "Bengaluru Urban",
      "ps": "Vijayanagar PS",
      "location": "Vijayanagar 4th Stage, Main Road",
      "lat": 12.9699,
      "lng": 77.5256,
      "accused": [
        { "id": "ACC001", "name": "Ravi Kumar", "alias": "Ravi Chain", "age": 28, "phone": "9845001234", "vehicle": "KA-05-BB-4737", "aadhaar_last4": "7823", "address": "Kengeri", "prior_cases": 3 }
      ],
      "victim": { "name": "Girija Shankar", "age": 58, "phone": "9741001188", "address": "Vijayanagar 3rd Stage" },
      "property_lost": "Gold chain ₹90,000",
      "status": "Charge Sheeted",
      "officer": "SI Kavitha R",
      "linked_firs": ["KSP/BLR/2026/0001", "KSP/BLR/2026/0008", "KSP/BLR/2026/0015"],
      "modus_operandi": "Pillion rider on motorcycle snatches chain at signal",
      "arrest_made": true,
      "arrest_date": "2026-01-10"
    },
    {
      "fir_no": "KSP/BLR/2026/0023",
      "date": "2026-03-08",
      "time": "11:30",
      "crime_type": "Cybercrime",
      "sub_type": "Online Banking Fraud",
      "ipc_sections": ["419", "420", "66C"],
      "district": "Bengaluru Urban",
      "ps": "CEN PS (Cybercrime)",
      "location": "Malleshwaram",
      "lat": 13.0032,
      "lng": 77.5694,
      "accused": [
        { "id": "ACC004", "name": "Vikram Singh", "alias": "Vicky OTP", "age": 26, "phone": "8971234560", "vehicle": null, "aadhaar_last4": "3310", "address": "Jharkhand", "prior_cases": 7 }
      ],
      "victim": { "name": "Nalini Bai", "age": 70, "phone": "9900001133", "address": "Malleshwaram" },
      "property_lost": "₹4,00,000 - life savings lost",
      "status": "Charge Sheeted",
      "officer": "ASI Deepak R",
      "linked_firs": ["KSP/BLR/2026/0003", "KSP/BLR/2026/0009"],
      "modus_operandi": "Fake TRAI call threatening to disconnect mobile, OTP extracted",
      "arrest_made": true,
      "arrest_date": "2026-02-02"
    },
    {
      "fir_no": "KSP/BLR/2026/0024",
      "date": "2026-03-10",
      "time": "19:45",
      "crime_type": "Extortion",
      "sub_type": "Online Extortion",
      "ipc_sections": ["383", "385", "66E"],
      "district": "Bengaluru Urban",
      "ps": "CEN PS (Cybercrime)",
      "location": "Sarjapur Road",
      "lat": 12.9081,
      "lng": 77.6856,
      "accused": [
        { "id": "ACC017", "name": "Unknown (VPN traced)", "alias": null, "age": null, "phone": "9090001234", "vehicle": null, "aadhaar_last4": null, "address": null, "prior_cases": 0 }
      ],
      "victim": { "name": "IT professional (name withheld)", "age": 35, "phone": "9611001199", "address": "Sarjapur Road" },
      "property_lost": "₹2,00,000 paid as extortion",
      "status": "Under Investigation",
      "officer": "ASI Deepak R",
      "linked_firs": [],
      "modus_operandi": "Sextortion via fake social profile, video call, morphed images used for blackmail",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0025",
      "date": "2026-03-14",
      "time": "09:00",
      "crime_type": "Theft",
      "sub_type": "Office Theft",
      "ipc_sections": ["380"],
      "district": "Bengaluru Urban",
      "ps": "Bellandur PS",
      "location": "Bellandur, Embassy Tech Village",
      "lat": 12.9290,
      "lng": 77.6760,
      "accused": [
        { "id": "ACC018", "name": "Ramesh Cleaning Staff", "alias": null, "age": 35, "phone": "9480221100", "vehicle": null, "aadhaar_last4": "5500", "address": "Bellandur village", "prior_cases": 0 }
      ],
      "victim": { "name": "InfoSys Premises (company)", "age": null, "phone": "9900001155", "address": "Embassy Tech Village" },
      "property_lost": "10 Laptops ₹9,50,000",
      "status": "Charge Sheeted",
      "officer": "SI Venkatesh R",
      "linked_firs": [],
      "modus_operandi": "Inside job - cleaning staff removed laptops in garbage bags",
      "arrest_made": true,
      "arrest_date": "2026-03-16"
    },
    {
      "fir_no": "KSP/BLR/2026/0026",
      "date": "2026-03-18",
      "time": "01:00",
      "crime_type": "Vehicle Theft",
      "sub_type": "Four-Wheeler Theft",
      "ipc_sections": ["379"],
      "district": "Bengaluru Urban",
      "ps": "Ejipura PS",
      "location": "Ejipura, Viveknagar",
      "lat": 12.9469,
      "lng": 77.6199,
      "accused": [
        { "id": "ACC019", "name": "Feroz Khan", "alias": "Feroz Car", "age": 29, "phone": "9611221100", "vehicle": null, "aadhaar_last4": "8812", "address": "Shivajinagar", "prior_cases": 4 }
      ],
      "victim": { "name": "Naveen Kumar", "age": 40, "phone": "9845221100", "address": "Viveknagar" },
      "property_lost": "Maruti Swift KA-03-MF-5522 ₹7,50,000",
      "status": "Under Investigation",
      "officer": "SI Suresh B",
      "linked_firs": ["KSP/BLR/2026/0010", "KSP/BLR/2026/0018"],
      "modus_operandi": "OBD port hack + relay attack on keyless entry, parked car stolen in 90 seconds",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/MYS/2026/0027",
      "date": "2026-01-08",
      "time": "20:30",
      "crime_type": "Robbery",
      "sub_type": "Highway Robbery",
      "ipc_sections": ["392", "397"],
      "district": "Mysuru",
      "ps": "Mysuru Rural PS",
      "location": "Mysuru-Bengaluru Highway NH-275, Km 55",
      "lat": 12.5266,
      "lng": 76.8987,
      "accused": [
        { "id": "ACC020", "name": "Basava Naik", "alias": "Basava Highway", "age": 32, "phone": "9844991100", "vehicle": "KA-09-T-2200 (stolen)", "aadhaar_last4": "3321", "address": "Mandya", "prior_cases": 3 }
      ],
      "victim": { "name": "Truck Driver Murugesan", "age": 44, "phone": "9894001122", "address": "Tamil Nadu" },
      "property_lost": "Cash ₹45,000, Mobile phone",
      "status": "Charge Sheeted",
      "officer": "SI Rangaswamy M",
      "linked_firs": ["KSP/MYS/2026/0035"],
      "modus_operandi": "Fake breakdown signal, stops vehicle, armed robbery in isolated highway stretch",
      "arrest_made": true,
      "arrest_date": "2026-01-25"
    },
    {
      "fir_no": "KSP/BLR/2026/0028",
      "date": "2026-01-19",
      "time": "23:00",
      "crime_type": "Drug Trafficking",
      "sub_type": "NDPS - Heroin",
      "ipc_sections": ["21(c) NDPS Act", "29 NDPS Act"],
      "district": "Bengaluru Urban",
      "ps": "Shivajinagar PS",
      "location": "Shivajinagar, Near Bus Stand",
      "lat": 12.9830,
      "lng": 77.6040,
      "accused": [
        { "id": "ACC008", "name": "Peer Mohammad", "alias": "Peer Maali", "age": 35, "phone": "9945501234", "vehicle": null, "aadhaar_last4": "6634", "address": "DJ Halli", "prior_cases": 4 },
        { "id": "ACC021", "name": "Syed Afroz", "alias": "Afroz Powder", "age": 28, "phone": "9741991100", "vehicle": null, "aadhaar_last4": "5523", "address": "Shivajinagar", "prior_cases": 2 }
      ],
      "victim": null,
      "property_lost": null,
      "status": "Charge Sheeted",
      "officer": "CI Mohan S",
      "linked_firs": ["KSP/BLR/2026/0006", "KSP/BLR/2026/0039"],
      "modus_operandi": "Supply from Mumbai via train, local distribution in small packets",
      "arrest_made": true,
      "arrest_date": "2026-01-19",
      "seized_contraband": "Heroin 45g (₹9 Lakhs street value)"
    },
    {
      "fir_no": "KSP/BLR/2026/0029",
      "date": "2026-02-05",
      "time": "16:00",
      "crime_type": "Fraud",
      "sub_type": "Investment Fraud",
      "ipc_sections": ["420", "120B"],
      "district": "Bengaluru Urban",
      "ps": "Indiranagar PS",
      "location": "Indiranagar, HAL 2nd Stage",
      "lat": 12.9718,
      "lng": 77.6412,
      "accused": [
        { "id": "ACC022", "name": "Nagaraj Rao", "alias": "Naga Invest", "age": 52, "phone": "9880221133", "vehicle": "KA-05-N-8877", "aadhaar_last4": "4490", "address": "Indiranagar", "prior_cases": 1 }
      ],
      "victim": { "name": "15 investors", "age": null, "phone": "9980001133", "address": "Various Bengaluru locations" },
      "property_lost": "₹85 Lakhs total - fake crypto investment scheme",
      "status": "Under Investigation",
      "officer": "CI Ramamurthy K",
      "linked_firs": [],
      "modus_operandi": "WhatsApp investment group, fake trading app, high returns promised, disappeared",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0030",
      "date": "2026-02-12",
      "time": "17:00",
      "crime_type": "Theft",
      "sub_type": "Mobile Phone Theft",
      "ipc_sections": ["379"],
      "district": "Bengaluru Urban",
      "ps": "Marathahalli PS",
      "location": "Marathahalli Bridge",
      "lat": 12.9560,
      "lng": 77.7018,
      "accused": [
        { "id": "ACC023", "name": "Unknown biker", "alias": null, "age": null, "phone": null, "vehicle": "KA-05-XX-0001 (fake plate)", "aadhaar_last4": null, "address": null, "prior_cases": 0 }
      ],
      "victim": { "name": "Shilpa R", "age": 26, "phone": "9741221155", "address": "Marathahalli" },
      "property_lost": "iPhone 16 Pro ₹1,30,000",
      "status": "Under Investigation",
      "officer": "SI Venkatesh R",
      "linked_firs": [],
      "modus_operandi": "Snatched phone from hand while victim walking, fake plates on bike",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0031",
      "date": "2026-03-22",
      "time": "03:30",
      "crime_type": "Burglary",
      "sub_type": "House Breaking",
      "ipc_sections": ["457", "380"],
      "district": "Bengaluru Urban",
      "ps": "Basavanagudi PS",
      "location": "Basavanagudi, Shankar Mutt Road",
      "lat": 12.9441,
      "lng": 77.5748,
      "accused": [
        { "id": "ACC002", "name": "Suresh Patil", "alias": "Suresh Lock", "age": 34, "phone": "9741009876", "vehicle": "KA-03-MN-8821", "aadhaar_last4": "4421", "address": "Anekal", "prior_cases": 5 }
      ],
      "victim": { "name": "Venkataramaiah BN", "age": 68, "phone": "9844991155", "address": "Basavanagudi" },
      "property_lost": "Gold jewelry ₹3,50,000, Cash ₹70,000",
      "status": "Under Investigation",
      "officer": "SI Rekha N",
      "linked_firs": ["KSP/BLR/2026/0002", "KSP/BLR/2026/0011", "KSP/BLR/2026/0019"],
      "modus_operandi": "Lock picking, solo this time, late night",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/MNG/2026/0032",
      "date": "2026-01-15",
      "time": "22:00",
      "crime_type": "Murder",
      "sub_type": "Honour Killing",
      "ipc_sections": ["302"],
      "district": "Mangaluru",
      "ps": "Mangaluru South PS",
      "location": "Mangaluru City, Bunder Area",
      "lat": 12.8654,
      "lng": 74.8426,
      "accused": [
        { "id": "ACC024", "name": "Ramakrishna Shetty", "alias": null, "age": 55, "phone": "9945221100", "vehicle": "KA-19-M-4411", "aadhaar_last4": "8800", "address": "Bunder, Mangaluru", "prior_cases": 0 }
      ],
      "victim": { "name": "Mahesh Shetty", "age": 24, "phone": null, "address": "Bunder, Mangaluru" },
      "property_lost": null,
      "status": "Charge Sheeted",
      "officer": "DySP Mangaluru South",
      "linked_firs": [],
      "modus_operandi": "Family dispute over inter-caste marriage",
      "arrest_made": true,
      "arrest_date": "2026-01-16"
    },
    {
      "fir_no": "KSP/BLR/2026/0033",
      "date": "2026-03-01",
      "time": "10:00",
      "crime_type": "Cybercrime",
      "sub_type": "Job Fraud",
      "ipc_sections": ["419", "420"],
      "district": "Bengaluru Urban",
      "ps": "CEN PS (Cybercrime)",
      "location": "Whitefield",
      "lat": 12.9698,
      "lng": 77.7499,
      "accused": [
        { "id": "ACC015", "name": "Unknown (IP traced to Rajasthan)", "alias": null, "age": null, "phone": "9001234560", "vehicle": null, "aadhaar_last4": null, "address": "Rajasthan", "prior_cases": 0 }
      ],
      "victim": { "name": "Tejas Nair", "age": 27, "phone": "9880112244", "address": "Whitefield" },
      "property_lost": "₹75,000 - fake job registration fees",
      "status": "Under Investigation",
      "officer": "ASI Deepak R",
      "linked_firs": ["KSP/BLR/2026/0020"],
      "modus_operandi": "Fake Infosys HR email, interview link, registration fee collected",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0034",
      "date": "2026-03-15",
      "time": "11:00",
      "crime_type": "Fraud",
      "sub_type": "Real Estate Fraud",
      "ipc_sections": ["420", "406", "120B"],
      "district": "Bengaluru Urban",
      "ps": "Yelahanka PS",
      "location": "Yelahanka, Attur Layout",
      "lat": 13.1089,
      "lng": 77.6018,
      "accused": [
        { "id": "ACC012", "name": "Chandrashekar BV", "alias": "Chandu Builder", "age": 48, "phone": "9980009001", "vehicle": "KA-51-N-4455", "aadhaar_last4": "7701", "address": "Hebbal", "prior_cases": 2 }
      ],
      "victim": { "name": "Multiple victims (8 families)", "age": null, "phone": "9900001111", "address": "Various" },
      "property_lost": "₹1.8 Crore additional victims",
      "status": "Under Investigation",
      "officer": "CI Ramamurthy K",
      "linked_firs": ["KSP/BLR/2026/0013"],
      "modus_operandi": "Same builder, different project name, same fraud pattern",
      "arrest_made": true,
      "arrest_date": "2026-02-20"
    },
    {
      "fir_no": "KSP/MYS/2026/0035",
      "date": "2026-02-14",
      "time": "21:00",
      "crime_type": "Robbery",
      "sub_type": "Highway Robbery",
      "ipc_sections": ["392", "397"],
      "district": "Mysuru",
      "ps": "Mysuru Rural PS",
      "location": "Mysuru-Ooty Highway NH-181",
      "lat": 12.3051,
      "lng": 76.6551,
      "accused": [
        { "id": "ACC020", "name": "Basava Naik", "alias": "Basava Highway", "age": 32, "phone": "9844991100", "vehicle": "KA-09-T-2200 (stolen)", "aadhaar_last4": "3321", "address": "Mandya", "prior_cases": 3 }
      ],
      "victim": { "name": "Taxi driver Raju", "age": 38, "phone": "9741991122", "address": "Mysuru" },
      "property_lost": "Cash ₹30,000, mobile",
      "status": "Charge Sheeted",
      "officer": "SI Rangaswamy M",
      "linked_firs": ["KSP/MYS/2026/0027"],
      "modus_operandi": "Same gang, same highway robbery MO",
      "arrest_made": true,
      "arrest_date": "2026-01-25"
    },
    {
      "fir_no": "KSP/HBL/2026/0036",
      "date": "2026-01-20",
      "time": "14:00",
      "crime_type": "Assault",
      "sub_type": "Communal Violence",
      "ipc_sections": ["147", "148", "149", "323", "324"],
      "district": "Hubli-Dharwad",
      "ps": "Hubli Town PS",
      "location": "Hubli, Gokul Road",
      "lat": 15.3647,
      "lng": 75.1240,
      "accused": [
        { "id": "ACC025", "name": "Group accused (12 persons)", "alias": null, "age": null, "phone": "9945881100", "vehicle": null, "aadhaar_last4": null, "address": "Hubli", "prior_cases": 0 }
      ],
      "victim": { "name": "Multiple injured (5 persons)", "age": null, "phone": "9741881100", "address": "Hubli" },
      "property_lost": "Property damage ₹5,00,000",
      "status": "Charge Sheeted",
      "officer": "SP Hubli-Dharwad",
      "linked_firs": [],
      "modus_operandi": "Religious procession dispute, stone pelting, violence",
      "arrest_made": true,
      "arrest_date": "2026-01-21"
    },
    {
      "fir_no": "KSP/BLG/2026/0037",
      "date": "2026-02-08",
      "time": "08:00",
      "crime_type": "Theft",
      "sub_type": "Agricultural Equipment Theft",
      "ipc_sections": ["379"],
      "district": "Belagavi",
      "ps": "Belagavi Rural PS",
      "location": "Belagavi, Hirebagewadi village",
      "lat": 15.8497,
      "lng": 74.4977,
      "accused": [
        { "id": "ACC026", "name": "Unknown", "alias": null, "age": null, "phone": null, "vehicle": "KA-22-T-0011 (tractor, stolen)", "aadhaar_last4": null, "address": null, "prior_cases": 0 }
      ],
      "victim": { "name": "Basavraj Patil", "age": 55, "phone": "9741221199", "address": "Hirebagewadi" },
      "property_lost": "Tractor + equipment ₹12,00,000",
      "status": "Under Investigation",
      "officer": "SI Ningappa K",
      "linked_firs": [],
      "modus_operandi": "Nighttime theft of parked agricultural equipment from field",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/KLG/2026/0038",
      "date": "2026-02-22",
      "time": "20:00",
      "crime_type": "Murder",
      "sub_type": "Property Dispute",
      "ipc_sections": ["302"],
      "district": "Kalaburagi",
      "ps": "Kalaburagi Town PS",
      "location": "Kalaburagi, Aland Road",
      "lat": 17.3297,
      "lng": 76.8343,
      "accused": [
        { "id": "ACC027", "name": "Sharanabasappa", "alias": null, "age": 45, "phone": "9480991100", "vehicle": "KA-32-N-7788", "aadhaar_last4": "1122", "address": "Kalaburagi", "prior_cases": 1 }
      ],
      "victim": { "name": "Basappa Reddy", "age": 60, "phone": null, "address": "Kalaburagi" },
      "property_lost": null,
      "status": "Charge Sheeted",
      "officer": "DySP Kalaburagi",
      "linked_firs": [],
      "modus_operandi": "Long-standing land boundary dispute, premeditated attack",
      "arrest_made": true,
      "arrest_date": "2026-02-23"
    },
    {
      "fir_no": "KSP/BLR/2026/0039",
      "date": "2026-03-25",
      "time": "22:00",
      "crime_type": "Drug Trafficking",
      "sub_type": "NDPS - MDMA",
      "ipc_sections": ["22(c) NDPS Act"],
      "district": "Bengaluru Urban",
      "ps": "Indiranagar PS",
      "location": "Indiranagar, 100 Feet Road Party Area",
      "lat": 12.9784,
      "lng": 77.6408,
      "accused": [
        { "id": "ACC008", "name": "Peer Mohammad", "alias": "Peer Maali", "age": 35, "phone": "9945501234", "vehicle": null, "aadhaar_last4": "6634", "address": "DJ Halli", "prior_cases": 4 },
        { "id": "ACC021", "name": "Syed Afroz", "alias": "Afroz Powder", "age": 28, "phone": "9741991100", "vehicle": null, "aadhaar_last4": "5523", "address": "Shivajinagar", "prior_cases": 2 }
      ],
      "victim": null,
      "property_lost": null,
      "status": "Charge Sheeted",
      "officer": "CI Mohan S",
      "linked_firs": ["KSP/BLR/2026/0006", "KSP/BLR/2026/0028"],
      "modus_operandi": "Party drug supply network, nightclub circuit",
      "arrest_made": true,
      "arrest_date": "2026-03-25",
      "seized_contraband": "MDMA 120 tablets, Cash ₹80,000"
    },
    {
      "fir_no": "KSP/BLR/2026/0040",
      "date": "2026-03-28",
      "time": "17:30",
      "crime_type": "Theft",
      "sub_type": "Shoplifting",
      "ipc_sections": ["380"],
      "district": "Bengaluru Urban",
      "ps": "Commercial Street PS",
      "location": "Commercial Street Market",
      "lat": 12.9815,
      "lng": 77.6068,
      "accused": [
        { "id": "ACC028", "name": "Gang of 3 (names withheld - minors involved)", "alias": null, "age": null, "phone": null, "vehicle": null, "aadhaar_last4": null, "address": "Majestic area", "prior_cases": 0 }
      ],
      "victim": { "name": "Shopkeeper Mohan Jewellers", "age": null, "phone": "9900221100", "address": "Commercial Street" },
      "property_lost": "Gold items ₹2,80,000",
      "status": "Under Investigation",
      "officer": "SI Manjunath P",
      "linked_firs": [],
      "modus_operandi": "Distraction technique, one engages shopkeeper, others steal",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0041",
      "date": "2026-04-02",
      "time": "13:00",
      "crime_type": "Fraud",
      "sub_type": "Insurance Fraud",
      "ipc_sections": ["420", "468"],
      "district": "Bengaluru Urban",
      "ps": "Shivajinagar PS",
      "location": "Shivajinagar, Insurance District",
      "lat": 12.9830,
      "lng": 77.6040,
      "accused": [
        { "id": "ACC029", "name": "Dr. Rajendra Prasad (fake doctor)", "alias": null, "age": 42, "phone": "9845991100", "vehicle": "KA-05-N-6644", "aadhaar_last4": "3301", "address": "Shivajinagar", "prior_cases": 2 }
      ],
      "victim": { "name": "LIC of India, Star Health Insurance", "age": null, "phone": "9900001155", "address": "Corporate" },
      "property_lost": "₹45 Lakhs in fraudulent claims",
      "status": "Under Investigation",
      "officer": "CI Ramamurthy K",
      "linked_firs": [],
      "modus_operandi": "Forged medical documents, fake hospitalization claims, network of fake patients",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0042",
      "date": "2026-04-05",
      "time": "06:30",
      "crime_type": "Theft",
      "sub_type": "Copper Wire Theft",
      "ipc_sections": ["379", "427"],
      "district": "Bengaluru Urban",
      "ps": "Byappanahalli PS",
      "location": "Byappanahalli Metro Station area",
      "lat": 12.9956,
      "lng": 77.6503,
      "accused": [
        { "id": "ACC030", "name": "Gang (4 members arrested)", "alias": null, "age": null, "phone": "9611551100", "vehicle": "KA-09-T-8899 (stolen tempo)", "aadhaar_last4": null, "address": "Rajasthan (migrant workers)", "prior_cases": 5 }
      ],
      "victim": { "name": "BMRCL (Metro Rail)", "age": null, "phone": "9900001199", "address": "Byappanahalli" },
      "property_lost": "Copper cable 250kg ₹8,50,000",
      "status": "Charge Sheeted",
      "officer": "SI Prakash M",
      "linked_firs": [],
      "modus_operandi": "Early morning, fake BESCOM uniforms, cut and load copper cables",
      "arrest_made": true,
      "arrest_date": "2026-04-06"
    },
    {
      "fir_no": "KSP/BLR/2026/0043",
      "date": "2026-04-08",
      "time": "15:00",
      "crime_type": "Cybercrime",
      "sub_type": "Identity Theft",
      "ipc_sections": ["66C", "419"],
      "district": "Bengaluru Urban",
      "ps": "CEN PS (Cybercrime)",
      "location": "Jayanagar",
      "lat": 12.9308,
      "lng": 77.5832,
      "accused": [
        { "id": "ACC004", "name": "Vikram Singh", "alias": "Vicky OTP", "age": 26, "phone": "8971234560", "vehicle": null, "aadhaar_last4": "3310", "address": "Jharkhand", "prior_cases": 7 }
      ],
      "victim": { "name": "CA Subramaniam", "age": 55, "phone": "9845001177", "address": "Jayanagar" },
      "property_lost": "Identity used to take ₹8,00,000 loan",
      "status": "Under Investigation",
      "officer": "ASI Deepak R",
      "linked_firs": ["KSP/BLR/2026/0003", "KSP/BLR/2026/0009", "KSP/BLR/2026/0023"],
      "modus_operandi": "Aadhaar data purchased from dark web, used for loan application",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/MYS/2026/0044",
      "date": "2026-02-28",
      "time": "11:00",
      "crime_type": "Cybercrime",
      "sub_type": "Online Banking Fraud",
      "ipc_sections": ["419", "420", "66C"],
      "district": "Mysuru",
      "ps": "Mysuru City PS",
      "location": "Mysuru, Saraswathipuram",
      "lat": 12.3051,
      "lng": 76.6551,
      "accused": [
        { "id": "ACC004", "name": "Vikram Singh", "alias": "Vicky OTP", "age": 26, "phone": "8971234560", "vehicle": null, "aadhaar_last4": "3310", "address": "Jharkhand", "prior_cases": 7 }
      ],
      "victim": { "name": "Prof. Geetha Rao", "age": 60, "phone": "9480881100", "address": "Saraswathipuram, Mysuru" },
      "property_lost": "₹5,50,000",
      "status": "Charge Sheeted",
      "officer": "SI Mysuru Cyber",
      "linked_firs": ["KSP/BLR/2026/0003"],
      "modus_operandi": "Same Vikram Singh cybercrime gang operating across Karnataka",
      "arrest_made": true,
      "arrest_date": "2026-02-02"
    },
    {
      "fir_no": "KSP/BLR/2026/0045",
      "date": "2026-04-10",
      "time": "09:30",
      "crime_type": "Theft",
      "sub_type": "Temple Theft",
      "ipc_sections": ["380", "295"],
      "district": "Bengaluru Urban",
      "ps": "Basavanagudi PS",
      "location": "Bull Temple Road, Dodda Ganapathi Temple",
      "lat": 12.9441,
      "lng": 77.5748,
      "accused": [
        { "id": "ACC031", "name": "Krishnappa alias Kittu", "alias": "Kittu Temple", "age": 40, "phone": "9741441100", "vehicle": null, "aadhaar_last4": "6612", "address": "Kengeri", "prior_cases": 8 }
      ],
      "victim": { "name": "Dodda Ganapathi Temple Trust", "age": null, "phone": "9900881100", "address": "Basavanagudi" },
      "property_lost": "Silver idol ₹3,50,000, Hundi cash ₹85,000",
      "status": "Charge Sheeted",
      "officer": "SI Manjunath P",
      "linked_firs": [],
      "modus_operandi": "Early morning, posed as devotee, stole during prayer time confusion",
      "arrest_made": true,
      "arrest_date": "2026-04-12"
    },
    {
      "fir_no": "KSP/BLR/2026/0046",
      "date": "2026-04-14",
      "time": "20:00",
      "crime_type": "Robbery",
      "sub_type": "Snatch and Grab",
      "ipc_sections": ["392"],
      "district": "Bengaluru Urban",
      "ps": "Hebbal PS",
      "location": "Hebbal Flyover, Outer Ring Road",
      "lat": 13.0453,
      "lng": 77.5938,
      "accused": [
        { "id": "ACC019", "name": "Feroz Khan", "alias": "Feroz Car", "age": 29, "phone": "9611221100", "vehicle": "KA-05-HM-3344", "aadhaar_last4": "8812", "address": "Shivajinagar", "prior_cases": 4 }
      ],
      "victim": { "name": "Ramya Krishnan", "age": 30, "phone": "9845771100", "address": "Hebbal" },
      "property_lost": "Handbag with laptop, ₹25,000 cash, gold jewelry ₹1,80,000",
      "status": "Under Investigation",
      "officer": "SI Anitha K",
      "linked_firs": ["KSP/BLR/2026/0026"],
      "modus_operandi": "Bike-borne, snatched bag from car window at signal",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0047",
      "date": "2026-04-18",
      "time": "03:00",
      "crime_type": "Burglary",
      "sub_type": "ATM Machine Breakin",
      "ipc_sections": ["457", "380"],
      "district": "Bengaluru Urban",
      "ps": "Electronic City PS",
      "location": "Electronic City Phase 2, SBI ATM",
      "lat": 12.8452,
      "lng": 77.6602,
      "accused": [
        { "id": "ACC032", "name": "Gang of 5 (partially identified)", "alias": null, "age": null, "phone": "9741661100", "vehicle": "KA-53-T-0099 (stolen truck)", "aadhaar_last4": null, "address": "Andhra Pradesh", "prior_cases": 3 }
      ],
      "victim": { "name": "State Bank of India", "age": null, "phone": "1800001122", "address": "Electronic City" },
      "property_lost": "₹28,00,000 from ATM machine",
      "status": "Under Investigation",
      "officer": "SP Bengaluru Urban",
      "linked_firs": [],
      "modus_operandi": "Gas cutter used to break ATM, carried machine in truck, broke open at remote location",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0048",
      "date": "2026-04-20",
      "time": "11:00",
      "crime_type": "Cybercrime",
      "sub_type": "Phishing",
      "ipc_sections": ["66C", "66D", "419"],
      "district": "Bengaluru Urban",
      "ps": "CEN PS (Cybercrime)",
      "location": "Bannerghatta Road",
      "lat": 12.8975,
      "lng": 77.5990,
      "accused": [
        { "id": "ACC015", "name": "Unknown (Rajasthan IP)", "alias": null, "age": null, "phone": "9001234560", "vehicle": null, "aadhaar_last4": null, "address": "Rajasthan", "prior_cases": 0 }
      ],
      "victim": { "name": "Rajesh Naidu", "age": 45, "phone": "9844661100", "address": "Bannerghatta Road" },
      "property_lost": "₹1,90,000 via fake Paytm phishing link",
      "status": "Under Investigation",
      "officer": "ASI Deepak R",
      "linked_firs": ["KSP/BLR/2026/0020", "KSP/BLR/2026/0033"],
      "modus_operandi": "WhatsApp message with Paytm KYC link, credentials harvested",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0049",
      "date": "2026-04-25",
      "time": "14:00",
      "crime_type": "Theft",
      "sub_type": "Chain Snatching",
      "ipc_sections": ["379", "356"],
      "district": "Bengaluru Urban",
      "ps": "RR Nagar PS",
      "location": "Rajarajeshwari Nagar, Main Road",
      "lat": 12.9226,
      "lng": 77.5079,
      "accused": [
        { "id": "ACC033", "name": "Manju alias Speed", "alias": "Speed", "age": 25, "phone": "9741551100", "vehicle": "KA-05-CC-7788 (stolen bike)", "aadhaar_last4": "4412", "address": "Kengeri", "prior_cases": 1 }
      ],
      "victim": { "name": "Shanta Devi", "age": 60, "phone": "9844551100", "address": "RR Nagar" },
      "property_lost": "Gold chain ₹72,000",
      "status": "Under Investigation",
      "officer": "SI Kavitha R",
      "linked_firs": [],
      "modus_operandi": "Stolen bike, snatching near market area, western Bengaluru pattern",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0050",
      "date": "2026-04-28",
      "time": "16:00",
      "crime_type": "Assault",
      "sub_type": "Gang Fight",
      "ipc_sections": ["147", "148", "324", "307"],
      "district": "Bengaluru Urban",
      "ps": "Shivajinagar PS",
      "location": "Shivajinagar, Near Central Bus Stand",
      "lat": 12.9830,
      "lng": 77.6040,
      "accused": [
        { "id": "ACC009", "name": "Raju Naik", "alias": "Raju Knife", "age": 30, "phone": "8880001234", "vehicle": "KA-09-C-7788", "aadhaar_last4": "1123", "address": "Banaswadi", "prior_cases": 3 },
        { "id": "ACC010", "name": "Santhosh Kumar", "alias": "Santu", "age": 28, "phone": "8880005678", "vehicle": null, "aadhaar_last4": "3344", "address": "Kammanahalli", "prior_cases": 2 }
      ],
      "victim": { "name": "Rival gang members (3 injured)", "age": null, "phone": null, "address": "Shivajinagar" },
      "property_lost": null,
      "status": "Under Investigation",
      "officer": "DySP Venkatesh M",
      "linked_firs": ["KSP/BLR/2026/0007", "KSP/BLR/2026/0012"],
      "modus_operandi": "Gang rivalry escalation, weapons used, public place",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0051",
      "date": "2026-05-01",
      "time": "10:30",
      "crime_type": "Fraud",
      "sub_type": "Cheque Fraud",
      "ipc_sections": ["420", "465", "468", "471"],
      "district": "Bengaluru Urban",
      "ps": "Shivajinagar PS",
      "location": "Shivajinagar Commercial Area",
      "lat": 12.9830,
      "lng": 77.6040,
      "accused": [
        { "id": "ACC034", "name": "Venkatesh alias Vicky Bounce", "alias": "Vicky Bounce", "age": 36, "phone": "9900331100", "vehicle": "KA-05-MT-1122", "aadhaar_last4": "7712", "address": "Shivajinagar", "prior_cases": 6 }
      ],
      "victim": { "name": "Multiple traders (7 shops)", "age": null, "phone": "9741331100", "address": "Shivajinagar area" },
      "property_lost": "₹18 Lakhs in bounced cheques",
      "status": "Under Investigation",
      "officer": "CI Ramamurthy K",
      "linked_firs": [],
      "modus_operandi": "Collected goods on credit with post-dated cheques, all bounced",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0052",
      "date": "2026-05-03",
      "time": "22:30",
      "crime_type": "Drug Trafficking",
      "sub_type": "NDPS - Cocaine",
      "ipc_sections": ["21(c) NDPS Act", "29 NDPS Act"],
      "district": "Bengaluru Urban",
      "ps": "Indiranagar PS",
      "location": "Indiranagar, Upscale Restaurant District",
      "lat": 12.9784,
      "lng": 77.6408,
      "accused": [
        { "id": "ACC035", "name": "Rohan Khanna", "alias": "Rohan Snow", "age": 31, "phone": "9611881100", "vehicle": "KA-05-EX-9900", "aadhaar_last4": "2290", "address": "Indiranagar", "prior_cases": 1 }
      ],
      "victim": null,
      "property_lost": null,
      "status": "Charge Sheeted",
      "officer": "CI Mohan S",
      "linked_firs": [],
      "modus_operandi": "High-end drug supply to premium clientele, delivery via food delivery apps",
      "arrest_made": true,
      "arrest_date": "2026-05-03",
      "seized_contraband": "Cocaine 85g (₹21 Lakhs street value)"
    },
    {
      "fir_no": "KSP/BLR/2026/0053",
      "date": "2026-05-05",
      "time": "07:00",
      "crime_type": "Theft",
      "sub_type": "Cable Theft",
      "ipc_sections": ["379", "427"],
      "district": "Peenya",
      "ps": "Peenya PS",
      "location": "Peenya Industrial Area",
      "lat": 13.0272,
      "lng": 77.5195,
      "accused": [
        { "id": "ACC030", "name": "Rajasthan migrant gang", "alias": null, "age": null, "phone": "9611551100", "vehicle": "KA-09-T-8899", "aadhaar_last4": null, "address": "Rajasthan", "prior_cases": 5 }
      ],
      "victim": { "name": "BESCOM Industrial Substation", "age": null, "phone": "1912", "address": "Peenya" },
      "property_lost": "Copper cable 180kg ₹6,10,000",
      "status": "Under Investigation",
      "officer": "SI Prakash M",
      "linked_firs": ["KSP/BLR/2026/0042"],
      "modus_operandi": "Same gang as Byappanahalli copper theft, same MO",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0054",
      "date": "2026-05-08",
      "time": "12:00",
      "crime_type": "Cybercrime",
      "sub_type": "Courier Fraud",
      "ipc_sections": ["419", "420", "506"],
      "district": "Bengaluru Urban",
      "ps": "CEN PS (Cybercrime)",
      "location": "Nagarbhavi",
      "lat": 12.9479,
      "lng": 77.5073,
      "accused": [
        { "id": "ACC015", "name": "Unknown (Rajasthan call center)", "alias": null, "age": null, "phone": "9001234560", "vehicle": null, "aadhaar_last4": null, "address": "Rajasthan", "prior_cases": 0 }
      ],
      "victim": { "name": "Nagamma", "age": 72, "phone": "9480221155", "address": "Nagarbhavi" },
      "property_lost": "₹3,20,000 - digital arrest fraud",
      "status": "Under Investigation",
      "officer": "ASI Deepak R",
      "linked_firs": ["KSP/BLR/2026/0020", "KSP/BLR/2026/0033", "KSP/BLR/2026/0048"],
      "modus_operandi": "Fake CBI/customs officer call, narcotics in parcel claim, digital arrest threat, money demanded",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0055",
      "date": "2026-05-10",
      "time": "16:30",
      "crime_type": "Theft",
      "sub_type": "Distraction Theft",
      "ipc_sections": ["379"],
      "district": "Bengaluru Urban",
      "ps": "Malleswaram PS",
      "location": "Malleswaram 8th Cross Market",
      "lat": 13.0032,
      "lng": 77.5694,
      "accused": [
        { "id": "ACC016", "name": "Ramu alias Rocky", "alias": "Rocky", "age": 22, "phone": null, "vehicle": null, "aadhaar_last4": null, "address": "Majestic area", "prior_cases": 6 }
      ],
      "victim": { "name": "Padmavathi", "age": 55, "phone": "9844881100", "address": "Malleswaram" },
      "property_lost": "Gold chain ₹65,000 in market crowd",
      "status": "Under Investigation",
      "officer": "SI Manjunath P",
      "linked_firs": ["KSP/BLR/2026/0021"],
      "modus_operandi": "Distraction by accomplice, chain unclipped by expert thief in crowd",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0056",
      "date": "2026-05-12",
      "time": "23:00",
      "crime_type": "Murder",
      "sub_type": "Contract Killing",
      "ipc_sections": ["302", "120B"],
      "district": "Bengaluru Urban",
      "ps": "Yeshwanthpur PS",
      "location": "Yeshwanthpur Industrial Area",
      "lat": 13.0213,
      "lng": 77.5404,
      "accused": [
        { "id": "ACC036", "name": "Contract killer (absconding)", "alias": "Hitman", "age": 32, "phone": "8088001100 (burner)", "vehicle": "KA-01-MX-3344 (stolen)", "aadhaar_last4": null, "address": "Unknown", "prior_cases": 2 }
      ],
      "victim": { "name": "Contractor Muthanna", "age": 50, "phone": null, "address": "Yeshwanthpur" },
      "property_lost": null,
      "status": "Under Investigation",
      "officer": "SP Bengaluru Urban",
      "linked_firs": [],
      "modus_operandi": "Business rivalry, hired assassin, single shot, planned execution",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0057",
      "date": "2026-05-15",
      "time": "08:00",
      "crime_type": "Theft",
      "sub_type": "Chain Snatching",
      "ipc_sections": ["379", "356"],
      "district": "Bengaluru Urban",
      "ps": "Kengeri PS",
      "location": "Kengeri Bus Terminal",
      "lat": 12.9067,
      "lng": 77.4834,
      "accused": [
        { "id": "ACC033", "name": "Manju alias Speed", "alias": "Speed", "age": 25, "phone": "9741551100", "vehicle": "KA-05-CC-7788 (stolen bike)", "aadhaar_last4": "4412", "address": "Kengeri", "prior_cases": 1 }
      ],
      "victim": { "name": "Usha Rani", "age": 52, "phone": "9900551155", "address": "Kengeri" },
      "property_lost": "Gold chain ₹58,000",
      "status": "Under Investigation",
      "officer": "SI Kavitha R",
      "linked_firs": ["KSP/BLR/2026/0049"],
      "modus_operandi": "Same stolen bike, western Bengaluru snatching spree",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0058",
      "date": "2026-05-18",
      "time": "19:00",
      "crime_type": "Robbery",
      "sub_type": "Business Robbery",
      "ipc_sections": ["392", "397"],
      "district": "Bengaluru Urban",
      "ps": "Rajajinagar PS",
      "location": "Rajajinagar, 4th Block Jewellery Shop",
      "lat": 12.9875,
      "lng": 77.5503,
      "accused": [
        { "id": "ACC037", "name": "Armed Gang (4 members, faces covered)", "alias": null, "age": null, "phone": null, "vehicle": "KA-01-MX-5566 (stolen)", "aadhaar_last4": null, "address": null, "prior_cases": 0 }
      ],
      "victim": { "name": "Lakshmi Jewellers, Rajajinagar", "age": null, "phone": "9900991100", "address": "4th Block, Rajajinagar" },
      "property_lost": "Gold ₹45,00,000",
      "status": "Under Investigation",
      "officer": "SP Bengaluru Urban",
      "linked_firs": [],
      "modus_operandi": "Armed entry at closing time, overpowered staff, cleaned display, fled in stolen car",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0059",
      "date": "2026-05-22",
      "time": "11:00",
      "crime_type": "Cybercrime",
      "sub_type": "Deepfake Fraud",
      "ipc_sections": ["66C", "66D", "419", "420"],
      "district": "Bengaluru Urban",
      "ps": "Koramangala",
      "lat": 12.9352,
      "lng": 77.6245,
      "accused": [
        { "id": "ACC038", "name": "Unknown (international IP)", "alias": null, "age": null, "phone": "9090990011", "vehicle": null, "aadhaar_last4": null, "address": "Unknown", "prior_cases": 0 }
      ],
      "victim": { "name": "IT Company CEO (name withheld)", "age": 48, "phone": "9845991122", "address": "Koramangala" },
      "property_lost": "₹25,00,000 - video call with CEO's deepfake face to CFO",
      "status": "Under Investigation",
      "officer": "ASI Deepak R",
      "linked_firs": [],
      "modus_operandi": "AI deepfake video call impersonating CEO, instructed CFO to wire funds urgently",
      "arrest_made": false,
      "arrest_date": null
    },
    {
      "fir_no": "KSP/BLR/2026/0060",
      "date": "2026-05-28",
      "time": "14:00",
      "crime_type": "Theft",
      "sub_type": "Chain Snatching",
      "ipc_sections": ["379", "356"],
      "district": "Bengaluru Urban",
      "ps": "Uttarahalli PS",
      "location": "Uttarahalli Main Road",
      "lat": 12.9024,
      "lng": 77.5392,
      "accused": [
        { "id": "ACC033", "name": "Manju alias Speed", "alias": "Speed", "age": 25, "phone": "9741551100", "vehicle": "KA-05-CC-7788 (stolen bike)", "aadhaar_last4": "4412", "address": "Kengeri", "prior_cases": 1 }
      ],
      "victim": { "name": "Vijayalakshmi", "age": 48, "phone": "9741881155", "address": "Uttarahalli" },
      "property_lost": "Gold chain + pendant ₹95,000",
      "status": "Under Investigation",
      "officer": "SI Kavitha R",
      "linked_firs": ["KSP/BLR/2026/0049", "KSP/BLR/2026/0057"],
      "modus_operandi": "Same stolen bike, third snatching in western Bengaluru corridor",
      "arrest_made": false,
      "arrest_date": null
    }
  ],

  "network_connections": [
    { "source": "ACC001", "target": "KA-05-BB-4737", "type": "USES_VEHICLE", "strength": "strong" },
    { "source": "ACC001", "target": "9845001234", "type": "USES_PHONE", "strength": "strong" },
    { "source": "ACC001", "target": "KSP/BLR/2026/0001", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC001", "target": "KSP/BLR/2026/0008", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC001", "target": "KSP/BLR/2026/0015", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC001", "target": "KSP/BLR/2026/0022", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC002", "target": "KA-03-MN-8821", "type": "USES_VEHICLE", "strength": "strong" },
    { "source": "ACC003", "target": "KA-03-MN-8821", "type": "USES_VEHICLE", "strength": "strong" },
    { "source": "ACC002", "target": "ACC003", "type": "ACCOMPLICE", "strength": "strong" },
    { "source": "ACC002", "target": "KSP/BLR/2026/0002", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC002", "target": "KSP/BLR/2026/0011", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC002", "target": "KSP/BLR/2026/0019", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC002", "target": "KSP/BLR/2026/0031", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC004", "target": "8971234560", "type": "USES_PHONE", "strength": "strong" },
    { "source": "ACC004", "target": "KSP/BLR/2026/0003", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC004", "target": "KSP/BLR/2026/0009", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC004", "target": "KSP/BLR/2026/0023", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC004", "target": "KSP/MYS/2026/0044", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC004", "target": "KSP/BLR/2026/0043", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC008", "target": "ACC021", "type": "ACCOMPLICE", "strength": "strong" },
    { "source": "ACC008", "target": "KSP/BLR/2026/0006", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC008", "target": "KSP/BLR/2026/0028", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC008", "target": "KSP/BLR/2026/0039", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC009", "target": "ACC010", "type": "ACCOMPLICE", "strength": "strong" },
    { "source": "ACC009", "target": "KSP/BLR/2026/0007", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC009", "target": "KSP/BLR/2026/0012", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC009", "target": "KSP/BLR/2026/0050", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC015", "target": "9001234560", "type": "USES_PHONE", "strength": "strong" },
    { "source": "ACC015", "target": "KSP/BLR/2026/0020", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC015", "target": "KSP/BLR/2026/0033", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC015", "target": "KSP/BLR/2026/0048", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC015", "target": "KSP/BLR/2026/0054", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC019", "target": "KSP/BLR/2026/0026", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC019", "target": "KSP/BLR/2026/0046", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC030", "target": "KSP/BLR/2026/0042", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC030", "target": "KSP/BLR/2026/0053", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC033", "target": "KA-05-CC-7788", "type": "USES_VEHICLE", "strength": "strong" },
    { "source": "ACC033", "target": "KSP/BLR/2026/0049", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC033", "target": "KSP/BLR/2026/0057", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "ACC033", "target": "KSP/BLR/2026/0060", "type": "ACCUSED_IN", "strength": "strong" },
    { "source": "KSP/BLR/2026/0006", "target": "KSP/BLR/2026/0028", "type": "LINKED_CASE", "strength": "strong" },
    { "source": "KSP/BLR/2026/0028", "target": "KSP/BLR/2026/0039", "type": "LINKED_CASE", "strength": "strong" },
    { "source": "KSP/BLR/2026/0007", "target": "KSP/BLR/2026/0012", "type": "LINKED_CASE", "strength": "strong" },
    { "source": "KSP/BLR/2026/0012", "target": "KSP/BLR/2026/0050", "type": "LINKED_CASE", "strength": "strong" },
    { "source": "KSP/BLR/2026/0042", "target": "KSP/BLR/2026/0053", "type": "SAME_GANG", "strength": "strong" },
    { "source": "KSP/BLR/2026/0049", "target": "KSP/BLR/2026/0057", "type": "SAME_OFFENDER", "strength": "strong" },
    { "source": "KSP/BLR/2026/0057", "target": "KSP/BLR/2026/0060", "type": "SAME_OFFENDER", "strength": "strong" }
  ],

  "hotspots": [
    { "area": "Jayanagar - JP Nagar - Banashankari Corridor", "lat": 12.921, "lng": 77.566, "crime_count": 8, "dominant_crime": "Chain Snatching", "risk_level": "HIGH", "pattern": "Weekday afternoon, women pedestrians targeted" },
    { "area": "Shivajinagar - Majestic Hub", "lat": 12.983, "lng": 77.604, "crime_count": 12, "dominant_crime": "Multiple", "risk_level": "VERY HIGH", "pattern": "All hours, transit hub vulnerability" },
    { "area": "Koramangala - Indiranagar Cybercrime Belt", "lat": 12.957, "lng": 77.633, "crime_count": 9, "dominant_crime": "Cybercrime", "risk_level": "HIGH", "pattern": "Urban professional victims, phone-based fraud" },
    { "area": "Banaswadi - Kammanahalli Gang Zone", "lat": 13.006, "lng": 77.651, "crime_count": 4, "dominant_crime": "Gang Violence", "risk_level": "HIGH", "pattern": "Night hours, gang rivalry" },
    { "area": "Western Bengaluru Snatching Corridor", "lat": 12.915, "lng": 77.509, "crime_count": 5, "dominant_crime": "Chain Snatching", "risk_level": "MEDIUM-HIGH", "pattern": "Stolen bike, moving westward" },
    { "area": "Electronic City - Bellandur Tech Zone", "lat": 12.887, "lng": 77.668, "crime_count": 4, "dominant_crime": "Cybercrime + Corporate Theft", "risk_level": "MEDIUM", "pattern": "Inside jobs, cyber fraud targeting IT workers" }
  ],

  "monthly_trends": [
    { "month": "January 2026", "total": 15, "theft": 4, "burglary": 3, "cybercrime": 2, "robbery": 2, "murder": 1, "drugs": 2, "other": 1 },
    { "month": "February 2026", "total": 13, "theft": 3, "burglary": 2, "cybercrime": 3, "robbery": 1, "murder": 1, "drugs": 0, "other": 3 },
    { "month": "March 2026", "total": 12, "theft": 4, "burglary": 1, "cybercrime": 3, "robbery": 0, "murder": 0, "drugs": 1, "other": 3 },
    { "month": "April 2026", "total": 11, "theft": 3, "burglary": 2, "cybercrime": 2, "robbery": 1, "murder": 1, "drugs": 1, "other": 1 },
    { "month": "May 2026", "total": 9, "theft": 4, "burglary": 0, "cybercrime": 3, "robbery": 1, "murder": 1, "drugs": 0, "other": 0 }
  ],

  "repeat_offenders": [
    { "id": "ACC004", "name": "Vikram Singh", "alias": "Vicky OTP", "total_firs": 5, "crime_type": "Cybercrime", "districts_active": ["Bengaluru Urban", "Mysuru"], "status": "Arrested", "risk_score": 95 },
    { "id": "ACC001", "name": "Ravi Kumar", "alias": "Ravi Chain", "total_firs": 4, "crime_type": "Chain Snatching", "districts_active": ["Bengaluru Urban"], "status": "Arrested", "risk_score": 88 },
    { "id": "ACC002", "name": "Suresh Patil", "alias": "Suresh Lock", "total_firs": 4, "crime_type": "Burglary", "districts_active": ["Bengaluru Urban"], "status": "Absconding", "risk_score": 91 },
    { "id": "ACC008", "name": "Peer Mohammad", "alias": "Peer Maali", "total_firs": 3, "crime_type": "Drug Trafficking", "districts_active": ["Bengaluru Urban"], "status": "Arrested", "risk_score": 85 },
    { "id": "ACC009", "name": "Raju Naik", "alias": "Raju Knife", "total_firs": 3, "crime_type": "Gang Violence", "districts_active": ["Bengaluru Urban"], "status": "Absconding", "risk_score": 92 },
    { "id": "ACC015", "name": "Unknown Rajasthan Caller", "alias": null, "total_firs": 4, "crime_type": "Cybercrime", "districts_active": ["Bengaluru Urban"], "status": "Under Investigation", "risk_score": 78 },
    { "id": "ACC033", "name": "Manju alias Speed", "alias": "Speed", "total_firs": 3, "crime_type": "Chain Snatching", "districts_active": ["Bengaluru Urban"], "status": "Absconding", "risk_score": 80 }
  ]
};
