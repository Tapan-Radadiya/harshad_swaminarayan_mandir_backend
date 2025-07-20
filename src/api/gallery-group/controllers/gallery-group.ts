/**
 * gallery-group controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::gallery-group.gallery-group', ({ strapi }) => ({
    async find(ctx) {
        const showThumbnailOnly = ctx.query?.mode === 'thumbnail';
        const galleryAllImages = ctx.query?.mode === 'groupimages'

        const { data, meta } = await super.find(ctx);
        if (galleryAllImages) {
            const imageData: any[] = data?.[0]?.image_managers
            const sortedImagesData = imageData.sort((a, b) => {
                return a.priority - b.priority
            }).map(img => {
                return {
                    src: img?.images?.url,
                    alt: img?.images?.alternativeText
                }
            })
            return { data: sortedImagesData, meta }
        }
        if (!showThumbnailOnly) {
            return { data, meta }
        }
        const thumbnail = data.map(group => {
            const imgMgrs: any[] = group?.image_managers || []
            const firstImg = imgMgrs.sort((a, b) => {
                return a.priority - b.priority
            })[0]

            return {
                id: group.id,
                group_key: group.group_key,
                title: group.title,
                thumbnail: firstImg
                    ? {
                        url: firstImg.images.url,
                        name: firstImg?.images?.name,
                        alt: firstImg?.images?.alternativeText || '',
                    }
                    : null,
            };
        })
        return { data: thumbnail, meta };
    }
}));
