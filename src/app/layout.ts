const layout = [
  { "key": "filter_cases", "title": "Filter Cases" },
  {
    "type": "section",
    // "title": "Stage",
    // "expandable": true,
    // "expanded": false,
    "items": [
      {
        "key": "stage",
        "type": "checkboxes",
        "titleMap": [
          { "value": "open", "name": "open" },
          { "value": "closed", "name": "closed" },
          { "value": "deleted", "name": "deleted" }
        ]
      }

    ]
  },
  {
    "type": "section",
    // "title": "Stage",
    // "expandable": true,
    // "expanded": false,
    "items": [
      {
        "key": "priority",
        "type": "checkboxes",
        "titleMap": [
          { "value": "low", "name": "low" },
          { "value": "middle", "name": "middle" },
          { "value": "high", "name": "high" }
        ]
      }

    ]
  },
  {"key": "time.start_date", "notitle": true, "type": "date", "placeholder":"start date"},
  {"key": "time.end_date", "notitle": true, "type": "date", "placeholder":"end date"},
  

]



export default layout;
