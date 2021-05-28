/*
- Google Scholar
- World Cat
*/

export const bcuSearchTargets = [
    {
      "name": "Helveticat",
      "url": "https://www.helveticat.ch/discovery/search?vid=41SNL_51_INST:helveticat&query=",
      "img": "helveticat.png",
      "alt": "Helveticat Logo",
      mapping: function(queries,filters) {
        try {
          let string = queries.map(part =>part).join('&query=');
          if (filters) {
            string = string + '&pfilter=' + filters.map(part => part).join('&pfilter');
          }
          if (!filters && queries.length == 1) {
            return string;
          }
          else {
            return string + '&mode=advanced';
          }
        }
        catch(e) {
          return ''
        }
      }
    },
    {
      "name": "Renouvaud",
      "url": "https://renouvaud.hosted.exlibrisgroup.com/primo-explore/search?vid=41BCULIB_VU2&query=",
      "img": "renouvaud.png",
      "alt": "Renouvaud Logo",
      mapping: function(queries,filters) {
        try {
          let string = queries.map(part =>part).join('&query=');
          if (filters) {
            string = string + '&pfilter=' + filters.map(part => part).join('&pfilter');
          }
          if (!filters && queries.length == 1) {
            return string;
          }
          else {
            return string + '&mode=advanced';
          }
        }
        catch(e) {
          return ''
        }
      }
    },
    {
      "name": "Google Scholar",
      "url": "https://scholar.google.com/scholar?q=",
      "img": "google-logo.png",
      "alt": "Google Scholar Logo",
      mapping: function (queries, filters) {
        try {
          return queries.map(part => part.split(",")[2] || "").join(' ')
        }
        catch (e) {
          return ''
        }
      }
    },
    {
      "name": "Worldcat",
      "url": "https://www.worldcat.org/search?",
      "img": "worldcat-logo.png",
      "alt": "Worldcat Logo",
      mapping: function (queries, filters) {
        const query_mappings = {
          'any': 'kw',
          'title': 'ti',
          'creator': 'au',
          'subject': 'su',
          'isbn': 'bn',
          'issn': 'n2'
        }
        try {
          return 'q=' + queries.map(part => {
            let terms = part.split(',')
            let type = query_mappings[terms[0]] || 'kw'
            let string = terms[2] || ''
            let join = terms[3] || ''
            return type + ':' + string + ' ' + join + ' '
          }).join('')
        }
        catch (e) {
          return ''
        }
      }
    }
];