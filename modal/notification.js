const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const notificationSchema = new Schema({
    newwork_notification: {
        type: String,
    },
    drawing_notification: {
        type: String,
    },
    sitesurvey_notification: {
        type: String,
    },
    aluiminium_notification: {
        type: String,
    },
    glass_notification: {
        type: String,
    },
    handover_notification: {
        type: String,
    },
    site_incharge: {
        type: String,
    },
    n_siteName: {
        type: String,
    },
    n_path: {
        type: String,
    },
    d_approve: {
        type: String,
    },
    st_approve: {
        type: String,
    },
    al_approve: {
        type: String,
    },
    gl_approve: {
        type: String,
    },
    hd_approve: {
        type: String,
    },
    status: {
        type: Boolean,
        default:false,
    },
    user_type_notifaction:{
        type: String,
    }

},
    {
        timestamps: true
    }
)

const Notification = mongooose.model('Notification', notificationSchema);
module.exports = Notification;