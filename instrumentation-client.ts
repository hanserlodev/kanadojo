// instrumentation-client.ts

if (process.env.NODE_ENV === 'development') {
  console.log('PostHog client instrumentation disabled in development mode.');
} else {
  // Dynamically import PostHog only in production
  import('posthog-js').then(module => {
    const posthog = module.default;
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

    if (posthogKey) {
      posthog.init(posthogKey, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        defaults: '2025-05-24'
      });
    } else {
      console.warn(
        'NEXT_PUBLIC_POSTHOG_KEY is not set; PostHog will not be initialized.'
      );
    }
  });
}
