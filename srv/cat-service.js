const cds = require("@sap/cds")

module.exports = cds.service.impl (function(){
  this.on ('getTodos', async (req) => {

    const todoApi = await cds.connect.to("SODUKU-PYTHON")
    return todoApi.tx(req).get("/custom?size=2&dificulty=0.1")

  }) 
})

/*
class CatalogService extends cds.ApplicationService {

  async init(){
      this.on('getTodos', async (req) => {
          const todoApi = await cds.connect.to("SODUKU-PYTHON2")
          console.log("Cached!");
          return todoApi.tx(req).get("/custom?size=2&dificulty=0.1")
      }
      
      
      )
  }
  
  }
  
  
module.exports = {CatalogService}
*/
/*
module.exports = (srv) => {

    srv.on ('READ', 'Books', async (req)=> {
      const openWeatherApi = await cds.connect.to("SODUKU-PYTHON2");
      return openWeatherApi.tx(req).get("/custom?size=2&dificulty=0.1");
    });
  
  }
  */