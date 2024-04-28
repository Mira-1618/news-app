const apiKey = process.env.NEWS_API_KEY;

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      displayNews(data.articles);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
  
  fetchNews();

  function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add("card-body");

        //create and append a headline to the articleDiv
        const title = document.createElement('h4');
        title.textContent = article.title;
        title.classList.add('card-title');
        articleDiv.appendChild(title);

        const image = document.createElement('img');
        image.textContent = displayImage(article.urlToImage);
        image.classList.add("card-img-top");
        articleDiv.appendChild(image);
    
      // TODO: Use document.createElement and appendChild to create and append more elements
  
      newsDiv.appendChild(articleDiv);
    }
}

function displayImage(imageUrl) { 
    const img = document.createElement('img'); 
    img.src = imageUrl;
    img.alt = "News photo";
    img.width = 500;
    document.querySelector('#news').appendChild(img); 
   }

