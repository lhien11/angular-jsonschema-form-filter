const schema = {
  "type": "object",
  "properties": {
    "filter_cases": { "type": "string" },
    "stage": { 
      "title": "Stage",
      "type": "string",
      "enum": ["open", "closed", "deleted" ]  
    },
    "priority": { 
      "title": "Priority",
      "type": "string",
      "enum": ["low", "middle", "high" ]  
    },
    "time": {
      "type": "object",
      "properties": {
        "start_date": { "type": "string" },
        "end_date": { "type": "string" }
      }



    }

  },

}



export default schema;
