
module.exports = ({ env }) => {

    return {
        upload: {
            config: {
                breakpoints: {},
                provider: 'aws-s3',
                providerOptions: {
                    accessKeyId: env('AWS_ACCESS_KEY_ID'),
                    secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
                    region: env('AWS_REGION'),
                    params: {
                        Bucket: env('AWS_BUCKET'),
                        ACL: 'public-read',
                    },
                },
                baseUrl: `https://${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`,
                basePath: '',
                actionOptions: {
                    upload: {
                        ACL: 'public-read',
                    },
                    uploadStream: {
                        ACL: 'public-read',
                    },
                    delete: {},
                }
            },
        },
    };
};
