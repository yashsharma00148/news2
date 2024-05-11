let search=document.querySelector("#search")
let button=document.querySelector(".submit")
const api_key="aece58c65ec44d45878a6d96f0529225";


let page=50;
let news_section=document.querySelector(".news_section")

const fetchdata= async(keyword)=>{
    
    const url = `https://newsapi.org/v2/everything?q=${keyword}&pageSize=${page}&apiKey=${api_key}`;
    
    let response= await fetch(url)
    let data =await response.json();
    let articles=data.articles.filter(article=>article.urlToImage !== null)
    console.log(articles)
    articles.forEach((article)=>{
        const news_card=document.createElement("div")
        news_card.classList.add("news_card")
         if(article.title.length>50){
             article.title=article.title.slice(0,51)+"..."
         }
         if(article.description.length>200){
             article.description=article.description.slice(0,200)+"..."
         }
         console.log(data)
         
        
        
        news_card.innerHTML=`
        <div class="article">
        <img src="${article.urlToImage}" alt="">
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href="${article.url}">Read Full</a>
        </div>`
        news_section.appendChild(news_card)
        
    })
    return data
    if(data=[]){
        alert("No results")
    }
   
    
}




button.addEventListener("click",()=>{
    news_section.innerHTML=""
    let keyword=search.value
    fetchdata(keyword)
    console.log("you searched",keyword)
    
})
document.addEventListener("keydown",(e)=>{
    console.log(e.keyCode)
    if(e.keyCode==13){
        news_section.innerHTML=""
        let keyword=search.value
        fetchdata(keyword)
        console.log("you searched",keyword)
        

    }
    
})
