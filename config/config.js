/**
 * Created by xiaodong chen on 12/20/2016.
 */


var CONFIG = {

    REDIS: {
        client: "redis://redistogo:3d6a66cf0013274281729241e0b3d59b@crestfish.redistogo.com:11319",
        herokuClient: "",
        anotherClient:"redis://h:pe9f1ih365dtc5ajp0pha3i12c7@ec2-50-19-83-130.compute-1.amazonaws.com:9119",
    },

    MONGODB: {
        url: "mongodb://admin:admin@ds041566.mlab.com:41566/heroku_v4dcjtn0"
    },

    SESSION: {
        secret: "faeb4453e5d14fe6f6d04637f78077c76c73d1b4",
        proxy: true,
        resave: true,
        saveUninitialized: true,
        maxAge: 3600000,
    },

    POSTGRE_DB: {
        host: "ec2-54-243-249-149.compute-1.amazonaws.com",
        user: "wxrfbtguomaqwx",
        database: "d92s1tko8rccnl",
        password: "tn6TNUUYiBrrGDP7-pZNCbPvQg",
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000
    }

}


module.exports = CONFIG;
