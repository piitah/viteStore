/**
* RunScript: JavaScript runscript is used to run script.
* You should return message object
* The input arguments of the script is message. 
*/
var logger = JsLogger.serviceDebugLogger;

var mgs = new Message();
mgs.header = message.header;
mgs.body = {
    "result": "false",
    "data": []
}
var network_type;
var ticket_id = message.body.ticket_id;
var getDomain = getDomain(ticket_id);

var result = getDomain.body.results;
// logger.error(result)
var domains = [];
var newDomain = []
for (var i = 0; i < result.length; i++) {
    var domain = result[i].domain;
    var device_type = result[i].device_type
    var res;

    if (domain.includes("-")) {
        res = domain.split("-")[1];
    } else {
        network_type = geNetworkType(device_type).body.result.network_type_id;
        res = network_type;
    }
    if (!domains.includes(res)) { domains.push(res); }
}
if (domains.includes("2G")) {
    newDomain.push("2G")
}
if (domains.includes("3G")) {
    newDomain.push("3G")
}
if (domains.includes("4G")) {
    newDomain.push("4G")
}
networktype = newDomain.join("/");
logger.error(networktype)
updateNetworkType(ticket_id, networktype);

return mgs;

function getDomain(ticket_id) {
    var getDomain = new Message();
    getDomain.body = {
        "ticket_id": ticket_id,
        "start": "0",
        "limit": "1000",
        "dir": "ASC",
        "sort": "domain"
    }
    var re = CloudServiceAccessor.process("app.service.ICTOMAlarm_To_SDM.fs_fm2sdmalarm_info_getList", getDomain);
    return re;
}
function updateNetworkType(ticket_id, networktype) {
    try {
        var updateNetworkType = new Message();
        updateNetworkType.header.commonValues.currentUser = "Sys" + "tem";
        updateNetworkType.body = {
            "orderid": ticket_id,
            "networktype": networktype
        }
        var re = CloudServiceAccessor.process("app.service.TroubleTicket.tt_troubleticket_update", updateNetworkType);
    }
    catch (e) {
        logger.error("executeTql error tql = " + ", errorMessage: " + e.toString());
    }
}

// function executeTql(tql) {
//     var result = [];
//     try {
//         var request = new Message();
//         request.body = {
//             "tql": [tql].join("")
//         };
//         var response = CloudServiceAccessor.process("app.api.baseInstanceService.query", request);
//         result = response.body.result.results;
//     }
//     catch (e) {
//         logger.error("executeTql error tql = " + tql + ", errorMessage: " + e.toString());
//     }
//     return result;
// }


function geNetworkType(name) {
    var req = new Message();
    req.body = {
        "device_type_name": name
    }
    var response = CloudServiceAccessor.process("app.service.c_ICTOMAlarm_To_SDM.cmdb_device_type_get", req);
    return response
}

function isNotBlank(val) {
    if (undefined == val || null == val) {
        return false;
    }

    val = val.toString();
    if ("undefined" == val || "" == val || "null" == val) {
        return false;
    }

    return true;
}

function isNull(value) {
    if (value == null || value == undefined) {
        return true;
    }

    var valstr = value.toString();
    if (valstr == 'null' || valstr == 'undefined' || valstr == '') {
        return true;
    }
    return false;
}
