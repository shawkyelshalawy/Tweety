const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema(
  {
    userTo: { type: Schema.Types.ObjectId, ref: "User" },
    userFrom: { type: Schema.Types.ObjectId, ref: "User" },
    notificationType: String,
    opened: { type: Boolean, default: false },
    entityId: Schema.Types.ObjectId,
  },
  { timestamps: true }
);
const Notfication = mongoose.model("Notfication", NotificationSchema);

NotificationSchema.statics.insertNotification = async (
  userTo,
  userFrom,
  notificationType,
  entityId
) => {
  var data = {
    userTo: userTo,
    userFrom: userFrom,
    notificationType: notificationType,
    entityId: entityId,
  };
  await Notification.deleteOne(data).catch((error) => console.log(error));
  return Notification.create(data).catch((error) => console.log(error));
};

exports.Notfication = Notfication;
