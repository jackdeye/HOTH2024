import cheerio from 'cheerio';
import axios from 'axios'
import usZips from 'us-zips'


export function a(zip) {

  const { latitude, longitude } = usZips[zip];
  // var longitude = usZips[zip].longitude

  // console.log("undefined?");
  console.log(latitude);
  console.log(longitude);
  const url = 'https://calscape.org/loc-' + latitude + ',' + longitude + '(' + zip + ')/cat-Trees/'
  // console.log(url);

  const dataPromise = axios.get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const idElements = $('[id^="id__"]');

      // Now you can extract specific data from each idElement
      const strings = idElements.map((_, element) => {
        const commonNameText = $(element).find('.common_name').text();
        const speciesText = $(element).find('span.species').text();
        // return "fdsak";
        return `${commonNameText}, ${speciesText}`;
        // console.log(`Species ${index + 1}: ${commonNameText} - ${speciesText}`);
      }).toArray();
      return strings;


    })
    .catch((error) => {
      console.error('Error fetching data:', error.message);
    });

  return dataPromise;
}


console.log(a(90045));
