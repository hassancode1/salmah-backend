'use strict';

/**
 * people-gallery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::people-gallery.people-gallery');
