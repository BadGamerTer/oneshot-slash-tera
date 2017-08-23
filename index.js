
const sysmsg = require('tera-data-parser').sysmsg,
const os = require('./helper')
	
module.exports = function OneShotCore(dispatch) {
	if(error) return

	dispatch.hook('C_CHECK_VERSION', 1, () => {
		if(!sysmsg.maps.get(dispatch.base.protocolVersion) || sysmsg.maps.get(dispatch.base.protocolVersion).name.size === 0) {
			console.error('ERROR: Your version of tera-proxy is too old to run One Shot Module')
			process.exit()
		}
	})

	os(dispatch)
}