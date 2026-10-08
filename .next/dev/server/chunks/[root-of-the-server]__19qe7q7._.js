module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:os [external] (node:os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:os", () => require("node:os"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/app/api/gallery/[collection]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__ = __turbopack_context__.i("[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs, [project]/node_modules/@aws-sdk/client-s3)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/s3-request-presigner/dist-es/getSignedUrl.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gallery$2d$projects$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/gallery-projects.ts [app-route] (ecmascript)");
;
;
;
const runtime = 'nodejs';
const dynamic = 'force-dynamic';
const s3 = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["S3Client"]({});
async function GET(_request, { params }) {
    const { collection } = await params;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gallery$2d$projects$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["galleryProjects"].some((project)=>project.id === collection)) {
        return Response.json({
            error: 'Gallery collection not found.'
        }, {
            status: 404
        });
    }
    const bucket = process.env.AWS_GALLERY_BUCKET;
    if (!bucket) return Response.json({
        error: 'Gallery storage is not configured.'
    }, {
        status: 503
    });
    try {
        const result = await s3.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["GetObjectCommand"]({
            Bucket: bucket,
            Key: `gallery-manifests/${collection}.json`
        }));
        const manifest = JSON.parse(await result.Body?.transformToString() ?? '');
        if (!Array.isArray(manifest.keys) || !manifest.keys.every((key)=>typeof key === 'string')) {
            return Response.json({
                error: 'Gallery manifest is invalid.'
            }, {
                status: 503
            });
        }
        const images = await Promise.all(manifest.keys.map((key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSignedUrl"])(s3, new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["GetObjectCommand"]({
                Bucket: bucket,
                Key: key
            }), {
                expiresIn: 3600
            })));
        return Response.json({
            images
        }, {
            headers: {
                'Cache-Control': 'no-store, max-age=0'
            }
        });
    } catch  {
        return Response.json({
            error: 'Gallery storage is unavailable.'
        }, {
            status: 503
        });
    }
}
}),
"[project]/src/data/gallery-projects.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "galleryProjects",
    ()=>galleryProjects
]);
const fallbackImage = '/assets/gallery/fallback.svg';
const galleryImage = (collection, filename)=>`/assets/gallery/${collection}/${filename}`;
const galleryProjects = [
    {
        id: 'tree-plantation-drive',
        title: 'Tree Plantation Drive',
        summary: 'Saplings planted across community land and public spaces.',
        coverImage: galleryImage('tree-plantation-drive', '20260925_45958PMByGPSMapCamera.jpg'),
        images: [
            galleryImage('tree-plantation-drive', '20260925_45958PMByGPSMapCamera.jpg'),
            galleryImage('tree-plantation-drive', '20260925_50023PMByGPSMapCamera.jpg')
        ]
    },
    {
        id: 'forest-restoration',
        title: 'Forest Restoration',
        summary: 'Native species restoration in degraded regeneration zones.',
        coverImage: galleryImage('community-awareness', '20260925_45959PMByGPSMapCamera.jpg'),
        images: [
            galleryImage('community-awareness', '20260925_45959PMByGPSMapCamera.jpg'),
            galleryImage('community-awareness', '20260925_50022PMByGPSMapCamera.jpg')
        ]
    },
    {
        id: 'community-awareness',
        title: 'Community Awareness',
        summary: 'Hands-on learning sessions and neighborhood outreach.',
        coverImage: galleryImage('soil-water-care', '20260925_50023PMByGPSMapCamera.jpg'),
        images: [
            galleryImage('soil-water-care', '20260925_50023PMByGPSMapCamera.jpg'),
            galleryImage('soil-water-care', '20260925_50023PMByGPSMapCamera(1).jpg')
        ]
    },
    {
        id: 'soil-water-care',
        title: 'Soil and Water Care',
        summary: 'Monitoring the health of land and local water resources.',
        coverImage: galleryImage('volunteers-at-work', '20260925_45958PMByGPSMapCamera.jpg'),
        images: [
            galleryImage('volunteers-at-work', '20260925_45958PMByGPSMapCamera.jpg'),
            galleryImage('volunteers-at-work', '20260925_50022PMByGPSMapCamera.jpg')
        ]
    },
    {
        id: 'volunteers-at-work',
        title: 'Volunteers at Work',
        summary: 'Local volunteers planting, caring, and monitoring growth.',
        coverImage: fallbackImage,
        images: [
            fallbackImage
        ]
    },
    {
        id: 'wildlife-habitat',
        title: 'Wildlife Habitat',
        summary: 'Creating sustainable habitat corridors for native species.',
        coverImage: fallbackImage,
        images: [
            fallbackImage
        ]
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__19qe7q7._.js.map