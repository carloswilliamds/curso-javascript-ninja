(function() {
   let emails = [
       "carloswillliamds@gmail.com",
       "carlos.william@multisolution.art.br",
       "carlos+nao@casadajoana.com.br",
       "asas.com.br",
       "asas@.com"
   ];
   let urls = [
       "http://www.google.com.br",
       "https://www.google.com",
       "https://google.com",
       "https://.www.google.com"
   ];

   let queryString = "?nome=carlos&idade=22&id=2941234";

   const matchQuery = /[\?&](\w+)=(\w+)/g

   const matchUrls = /https?:\/\/\w+[.\w]+/

   const matchEmails = /[\w\+\.]+@[^.][\w+\.]+/

   urls.forEach((item, index) =>{
       if(item.match(matchUrls)){
        console.log(item.match(matchUrls).input)
       }
   })

   emails.forEach(item =>{
       if(item.match(matchEmails)){
        console.log(item.match(matchEmails).input)
       }

   })

      const dados = [];
      queryString.replace(matchQuery, (regex, key, value) =>{
          dados.push({key, value})
       console.log(key, value)
   })

   console.log(dados)

}())

