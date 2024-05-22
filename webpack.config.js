
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const { merge } = require( 'webpack-merge' );

// get default configs
const [ scriptConfig, moduleConfig ] = defaultConfig;

/**
 * Override script config
 * the script config is the default config, which is used with or without the --experimental-modules flag
 */
const scriptConfigOverride = {
	// your configuration here
};

/**
 * Override modules config
 * the module config is used for all scripts that are loaded via "viewScriptModule" in the block.json
 */
const moduleConfigOverride = {
	// your configuration here
};

module.exports = [
	merge( scriptConfig, scriptConfigOverride ),
	merge( moduleConfig, moduleConfigOverride ),
];
