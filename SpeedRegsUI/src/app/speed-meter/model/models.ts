export interface RegistrationsList {
  "id": number,
  "plateNumber": string,
  "timeIn": any,
  "timeOut": any
}

export interface GeneralTrafficStatsResponse {
  "highestSpeedVehicle": {
    "plate": string,
    "avgSpeed": number,
    "overtaken": number
  },
  "percentSpeedingVehicles": number,
  "totalRegistrations": number,
  "totalRegistrationsBeforeNine": number
}

export interface TrafficStatsResponse {
  totalRegistrations: number,
  intensity: number
}
