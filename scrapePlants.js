import cheerio from 'cheerio';
import axios from 'axios'
import usZips from 'us-zips'

const zip = '94707'

var latitude = usZips[zip].latitude
var longitude = usZips[zip].longitude

console.log(latitude);
console.log(longitude);
const url = 'https://calscape.org/loc-'+ latitude + ',' + longitude + '(' + zip +')/cat-Trees/'
console.log(url);

axios.get(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const idElements = $('[id^="id__"]');

    // Now you can extract specific data from each idElement
    idElements.each((index, element) => {
      const commonNameText = $(element).find('.common_name').text();  
      const speciesText = $(element).find('span.species').text();
      console.log(`Species ${index + 1}: ${commonNameText} - ${speciesText}`);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error.message);
  });

