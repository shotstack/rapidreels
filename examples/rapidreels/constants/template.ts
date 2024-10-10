// You can edit this template on https://dashboard.shotstack.io/studio/overview
export const template = {
  timeline: {
    background: '#000000',
    tracks: [
      {
        clips: [
          {
            asset: {
              type: 'text',
              text: '{{ headline }}',
              alignment: {
                horizontal: 'left',
                vertical: 'center'
              },
              font: {
                color: '#000000',
                family: 'Montserrat ExtraBold',
                size: '60',
                lineHeight: 1
              },
              width: 437,
              height: 200
            },
            start: 0.954,
            length: 'auto',
            offset: {
              x: 0,
              y: 0.302
            },
            position: 'center',
            fit: 'none',
            scale: 1
          }
        ]
      },
      {
        clips: [
          {
            length: 'auto',
            asset: {
              type: 'image',
              src: 'https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/wzr6y0wtti/zzz01j7c-z74py-r3651-kegfa-f703hd/source.png'
            },
            start: 0.954,
            scale: 0.199,
            offset: {
              x: -0.016,
              y: 0.304
            },
            position: 'center'
          }
        ]
      },
      {
        clips: [
          {
            length: 'end',
            asset: {
              type: 'caption',
              src: 'alias://voiceover',
              background: {
                color: '#ff0000',
                padding: 19,
                borderRadius: 7
              },
              font: {
                size: '28'
              }
            },
            start: 0
          }
        ]
      },
      {
        clips: [
          {
            fit: 'crop',
            scale: 1,
            length: 5,
            asset: {
              width: '768',
              height: '1280',
              type: 'text-to-image',
              prompt: '{{ image-prompt-2 }}'
            },
            start: 4,
            effect: 'zoomOut',
            transition: {
              in: 'fade',
              out: 'fade'
            }
          },
          {
            fit: 'crop',
            scale: 1,
            length: 5,
            asset: {
              width: '768',
              height: '1280',
              type: 'text-to-image',
              prompt: '{{ image-prompt-4 }}'
            },
            start: 12,
            effect: 'zoomOut',
            transition: {
              in: 'fade',
              out: 'fade'
            }
          },
          {
            fit: 'crop',
            scale: 1,
            length: 'end',
            asset: {
              width: '768',
              height: '1280',
              type: 'text-to-image',
              prompt: '{{ image-prompt-6 }}'
            },
            start: 20,
            effect: 'zoomOut',
            transition: {
              in: 'fade',
              out: 'fade'
            }
          }
        ]
      },
      {
        clips: [
          {
            fit: 'crop',
            scale: 1,
            length: 5,
            asset: {
              width: '768',
              height: '1280',
              type: 'text-to-image',
              prompt: '{{ image-prompt-1 }}'
            },
            start: 0,
            effect: 'zoomOut',
            transition: {
              in: 'fade',
              out: 'fade'
            }
          },
          {
            fit: 'crop',
            scale: 1,
            length: 5,
            asset: {
              width: '768',
              height: '1280',
              type: 'text-to-image',
              prompt: '{{ image-prompt-3 }}'
            },
            start: 8,
            effect: 'zoomOut',
            transition: {
              in: 'fade',
              out: 'fade'
            }
          },
          {
            fit: 'crop',
            scale: 1,
            length: 5,
            asset: {
              width: '768',
              height: '1280',
              type: 'text-to-image',
              prompt: '{{ image-prompt-5 }}'
            },
            start: 16,
            effect: 'zoomOut',
            transition: {
              in: 'fade',
              out: 'fade'
            }
          }
        ]
      },
      {
        clips: [
          {
            length: 'auto',
            asset: {
              voice: 'Olivia',
              text: '{{ voiceover }}',
              type: 'text-to-speech'
            },
            start: 0,
            alias: 'voiceover'
          }
        ]
      }
    ]
  },
  output: {
    format: 'mp4',
    fps: 25,
    size: {
      width: 720,
      height: 1280
    },
    destinations: [
      {
        provider: 'tiktok'
      }
    ]
  },
  merge: [
    {
      find: 'headline',
      replace: 'Surprising Wildlife Wonders'
    },
    {
      find: 'voiceover',
      replace: 'wadup doc'
    },
    {
      find: 'image-prompt-1',
      replace: 'a sexy giraffe'
    },
    {
      find: 'image-prompt-2',
      replace: 'a sexy giraffe'
    },
    {
      find: 'image-prompt-3',
      replace: 'a sexy giraffe'
    },
    {
      find: 'image-prompt-4',
      replace: 'a sexy giraffe'
    },
    {
      find: 'image-prompt-5',
      replace: 'a sexy giraffe'
    },
    {
      find: 'image-prompt-6',
      replace: 'a sexy giraffe'
    },
    {
      find: 'voice',
      replace: 'Olivia'
    }
  ]
};
