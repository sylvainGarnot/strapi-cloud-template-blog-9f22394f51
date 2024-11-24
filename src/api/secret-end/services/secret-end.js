'use strict';

/**
 * secret-end service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::secret-end.secret-end');
