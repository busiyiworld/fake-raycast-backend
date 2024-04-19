# Fake Raycast Backend

This is a fake Raycast backend that can be deployed to Vercel in one step.

> [!TIP]
> It can be used to unlock Raycast Pro and Raycast AI (with your own OpenAI API key). Just Click to deploy.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fourongxing%2Ffake-raycast-backend&env=APIKey&envDescription=OpenAI%20API%20Key)

Then, you will get a URL like `https://fake-raycast-backend-xxxx.vercel.app` and you should rewrite the header from `backend.raycast.com` to it using some network tools like Surge. Make sure to open MitM on Surge and install the certificate on your device.

For example, you can use the following Surge rule:

```ini
[URL Rewrite]
https:\/\/backend.raycast.com https://fake-raycast-backend-xxxx.vercel.app header
```

## Credits
- [Raycast Unblock](https://github.com/wibus-wee/raycast-unblock): Based on this project, I just simplified some features and made it easy to deploy to Vercel.