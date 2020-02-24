const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var db = mongoose.connection;
db.on("error", console.error.bind(console));
db.once("open", function() {
  console.log(" database connection succeded");
});
const mainSchema = new Schema({
  id: Number,
  mainComImg: String,
  mainComDis: String
});
const userSchema = new mongoose.Schema({
  id: Number,
  email: String,
  password: String,
  role: String
});
const ownerSchema = new mongoose.Schema({
  name: String,
  userId: Number,
  profileImg: String
});
//
const customerSchema = new mongoose.Schema({
  name: String,
  userId: String,
  profileImg: String
});
const ShopsSchema = new mongoose.Schema({
  ownerId: String,
  location: String,
  contactInfo: String,
  name: String,
  contactInfo: String,
  price: Number,
  openingHours: Number,
  capacity: Number,
  description: String,
  image: String,
  imageSlider: Array
});
const AppointmentsSchema = new mongoose.Schema({
  shopId: Number,
  customerId: Number,
  startDate: Date,
  endDate: Date,
  title: String,
  notes: String,
  type: String
});
const collSchema = new mongoose.Schema({
  userName: String,
  Email: String,
  password: String
});
const BgImg = new mongoose.Schema({
  id: Number,
  backgroundImg: String
});
const UserModel = mongoose.model("user", userSchema);
const BgImgModel = mongoose.model("backgroundImg", BgImg);
const OwnerModel = mongoose.model("owner", ownerSchema);
const CustomerModel = mongoose.model("customer", customerSchema);
const ShopsModel = mongoose.model("shops", ShopsSchema);
const AppointmentsModel = mongoose.model("appointment", AppointmentsSchema);
const Coll = mongoose.model("coll ", collSchema);
const mainModel = mongoose.model("main", mainSchema);

// user1 = new UserModel({
//   id: 4,
//   email: "String",
//   password: "String",
//   role: "String"
// });
// bg = new BgImgModel({
//   id: 1,
//   backgroundImg:
//     "https://www.landmarkamman.com/sites/default/files/styles/slider/public/imageblock/MainWedding.jpg?itok=6kRY4AJu"
// });
// owner1 = new OwnerModel({
//   name: "String",
//   userId: 2,
//   profileImg: "String"
// });
// customer1 = new CustomerModel({
//   name: "String",
//   userId: 2,
//   profileImg: "String"
// });
// shops1 = new ShopsModel({
//   id: 9,
//   ownerId: "2",
//   location:
//     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13536.790522042322!2d35.83889189999999!3d31.9826576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca185283dfb89%3A0x611dda32fcd10faa!2z2LPZitiq2Yog2YXZiNmE!5e0!3m2!1sar!2sjo!4v1575807547103!5m2!1sar!2sjo",
//   contactInfo: "0785200000",
//   price: 200,
//   openingHours: 8,
//   capacity: 2,
//   description: "this is a detaile from dataBase it works",
//   image:
//     "https://www.brandsynario.com/wp-content/uploads/2018/01/marriage-halls-lead.jpg",
//   imageSlider: [
//     {
//       url:
//         "https://www.geo.tv/assets/uploads/updates/2019-03-21/231757_5095423_updates.jpg"
//     },
//     {
//       url:
//         "https://mybookpk.s3.amazonaws.com/assets/upload/halls/hall_2016oRW5zQzE7TeqySPl92nfsWDnQJGt7O3sws7HiLWS"
//     },
//     {
//       url:
//         "https://www.geo.tv/assets/uploads/updates/2019-03-21/231757_5095423_updates.jpg"
//     },
//     {
//       url:
//         "https://mybookpk.s3.amazonaws.com/assets/upload/halls/hall_2016oRW5zQzE7TeqySPl92nfsWDnQJGt7O3sws7HiLWS"
//     },
//     {
//       url:
//         "https://www.geo.tv/assets/uploads/updates/2019-03-21/231757_5095423_updates.jpg"
//     },
//     {
//       url:
//         "https://mybookpk.s3.amazonaws.com/assets/upload/halls/hall_2016oRW5zQzE7TeqySPl92nfsWDnQJGt7O3sws7HiLWS"
//     },
//     {
//       url:
//         "https://www.geo.tv/assets/uploads/updates/2019-03-21/231757_5095423_updates.jpg"
//     }
//   ]
// });
// appointment1 = new AppointmentsModel({
//   shopId: 2,
//   timeSlot: 1,
//   date: 2,
//   customerId: 2
// });
// coll1 = new Coll({
//   userName: "noran adel",
//   Email: "nanaadel97@hotmail.com",
//   password: "123456789"
// });

// bg.save((error, result) => {
//   if (error) {
//     console.log("restaurants error", error);
//   } else {
//     console.log("owner done");
//   }
// });
// // customer1.save((error, result) => {
// //   if (error) {
// //     console.log("user error", error);
// //   } else {
// //     console.log("customer done");
// //   }
// // });
// // shops1.save((error, result) => {
// //   if (error) {
// //     console.log("cakeshops error", error);
// //   } else {
// //     console.log("shops done");
// //   }
// // });
// // appointment1.save((error, result) => {
// //   if (error) {
// //     console.log("saloons error", error);
// //   } else {
// //     console.log("appointment done");
// //   }
// // });
// // coll1 = new Coll({
// //     userName:"noran adel",
// //     Email: "nanaadel97@hotmail.com",
// //     password:"123456789"
// //   })
let saveAppointment = (Appointments, callback) => {
  var appointment = new AppointmentsModel({
    shopId: Appointments.shopId,
    customerId: Appointments.customerId,
    startDate: Appointments.startDate,
    endDate: Appointments.endDate,
    title: Appointments.title,
    notes: Appointments.notes,
    type: Appointments.type
  });
  appointment.save();
};
// appointment1 = new AppointmentsModel({
//   shopId: 1,
//   customerId: 1,
//   startDate:
//     "Fri Dec 13 2019 2:00:00 GMT+0200 (Eastern European Standard Time)",
//   endDate: "Fri Dec 13 2019 3:00:00 GMT+0200 (Eastern European Standard Time)",
//   title: "lolParty",
//   notes: "lolno-notes",
//   type: "party"
// });
// // appointment1.save((error, result) => {
// //   if (error) {
// //     console.log("error", error);
// //   } else {
// //     console.log("appointment done");
// //   }
// // });
module.exports.UserModel = UserModel;
module.exports.OwnerModel = OwnerModel;
module.exports.CustomerModel = CustomerModel;
module.exports.ShopsModel = ShopsModel;
module.exports.AppointmentsModel = AppointmentsModel;
module.exports.saveAppointment = saveAppointment;
module.exports.Coll = Coll;
module.exports.BgImgModel = BgImgModel;
module.exports.mainModel = mainModel;
