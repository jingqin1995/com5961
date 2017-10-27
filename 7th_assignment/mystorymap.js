// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "2010-2017",
      text: {
        headline: "MY EDUCATIONAL EXPERIENCE",
        text: "<p>Born in Guangzhou, Guangdong, I do not leave my hometown until 2017 when I went to Chinese University of Hong Kong pursuiting my master degree. This map will elaborate my educational experience from high school to university.</p>"
      },
      media: {
        url: "https://cdn.pixabay.com/photo/2017/03/24/11/27/book-2170910_960_720.jpg",
        credit: "Education",
        caption: "About Me"
      }
    }, {
      date: "20010-2013",
      text: {
        headline: "GUANGZHOU NO.2 HIGH SCHOOL",
        text: "<p>Guangzhou No.2 High School, formerly known as Guangzhou No.2 Middle School, is a high school with multiple campuses in Guangzhou. The school was established in 1930. Science City Campus is my high school, which locates on Suyuan Hill, and it is said that a famous Chinese poet Su Shi lived there when he was travelling to Lingnan. </p>"
      },
      location: {
        name: "Guangzhou NO.2 High School",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 23.1767,
        lon: 113.4717,
        zoom: 20,
        line: true
      },
      media: {
        url: "http://res.zy.com/Resource/Schools/20130531004833420852.jpg",
        type: 		"image",
        credit: "High School",
        caption: "Guangzhou NO.2 High School"
      }
    }, {
      date: "2013-2017",
      text: {
        headline: "SUN YAT-SEN UNIVERSITY",
        text: "<p>Sun Yat-sen University, known in Chinese as Zhongda, is a major Chinese public research university located in Guangdong. It was founded in 1924 by Dr. Sun Yat-sen, a revolutionary and the founding father of the Republic of China. In addition to its academic achievement (consistently ranked among the top 10 universities in mainland China), its historical architecture also attracts a large number of tourists around the world.</p> "
      },
      location: {
        name: "Sun Yat-sen university",
        lat: 23.0981,
        lon: 113.2981,
        zoom: 20,
        line: true
      },
      media: {
        url: "http://img1.youzy.cn/content/media/thumbs/p00176136.jpeg",
        credit: "SYSU",
        caption: "Bachelor of Arts in Journalism"
      }
    }, {
      date: "2017",
      text: {
        headline: "CHINESE UNIVERSITY OF HONG KONG",
        text: "<p>The Chinese University of Hong Kong (CUHK) is a public research university in Shatin, Hong Kong formally established in 1963 by a chartergranted by the Legislative Council of Hong Kong. It is the territory's second oldest university and was founded as a federation of three existing colleges – Chung Chi College, New Asia College and United College – the oldest of which was founded in 1949. Today, CUHK is organized into nine constituent colleges and eight academic faculties, and remains the only collegiate university in the territory. </p> "
      },
      location: {
        name: "Chinese University of Hong Kong",
        lat: 22.4213,
        lon: 114.2071,
        zoom: 20,
        line: true
      },
      media: {
        url: "http://www.essence-edu.com/news/wp-content/uploads/2017/02/Chinese-University.jpg",
        credit: "CUHK",
        caption: "Master of Science in New Media"
      }      
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}