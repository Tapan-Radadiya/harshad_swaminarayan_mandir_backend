import ratelimit from 'koa-ratelimit';
import { LRUCache } from 'lru-cache';

export default (config, { strapi }) => {
    return ratelimit({
        driver: 'memory',
        db: new Map(),
        duration: 60000, // 1 minute
        errorMessage: 'Too many requests from this IP. Please try again later.',
        id: (ctx) => ctx.ip,
        max: 100, // limit each IP to 60 requests per minute
        headers: {
            remaining: 'Rate-Limit-Remaining',
            reset: 'Rate-Limit-Reset',
            total: 'Rate-Limit-Total',
        },
    });
};
