'use strict';

/**
 * secret-end router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::secret-end.secret-end');
