// You can edit this template on https://dashboard.shotstack.io/studio/overview
export const template = {
  timeline: {
    fonts: [
      {
        src: 'https://templates.shotstack.io/basic/asset/font/manrope-extrabold.ttf'
      },
      {
        src: 'https://templates.shotstack.io/basic/asset/font/manrope-light.ttf'
      }
    ],
    background: '#000000',
    tracks: [
      {
        clips: [
          {
            asset: {
              type: 'text',
              text: '{{ address }}',
              font: {
                family: 'Manrope ExtraBold',
                color: '{{ primaryColor }}',
                size: 40
              },
              alignment: {
                horizontal: 'left',
                vertical: 'bottom'
              },
              width: 320,
              height: 118
            },
            start: 1.2,
            length: 4.2,
            offset: {
              x: -0.3,
              y: 0.25
            },
            transition: {
              in: 'slideRight',
              out: 'slideLeft'
            },
            fit: 'none',
            scale: 1
          }
        ]
      },
      {
        clips: [
          {
            asset: {
              type: 'text',
              text: '{{ suburb }}, {{ state }} {{ postcode }}',
              font: {
                family: 'Manrope Light',
                color: '{{ secondaryColor }}',
                size: 22
              },
              alignment: {
                horizontal: 'left',
                vertical: 'top'
              },
              width: 320,
              height: 50
            },
            start: 1.3,
            length: 3.9,
            offset: {
              x: -0.3,
              y: 0.101
            },
            transition: {
              in: 'slideRight',
              out: 'slideLeft'
            },
            fit: 'none',
            scale: 1
          }
        ]
      },
      {
        clips: [
          {
            asset: {
              type: 'text',
              text: '{{ price }}',
              font: {
                family: 'Manrope ExtraBold',
                color: '{{ primaryColor }}',
                size: 22
              },
              alignment: {
                horizontal: 'left'
              },
              width: 320,
              height: 75
            },
            start: 1.4,
            length: 4,
            offset: {
              x: -0.3,
              y: -0.246
            },
            transition: {
              in: 'slideRight',
              out: 'slideLeft'
            },
            fit: 'none',
            scale: 1
          }
        ]
      },
      {
        clips: [
          {
            asset: {
              type: 'text',
              text: '{{ propertyType }}',
              font: {
                family: 'Manrope Light',
                color: '{{ secondaryColor }}',
                size: 17
              },
              alignment: {
                horizontal: 'left'
              },
              width: 320,
              height: 32
            },
            start: 1.4,
            length: 4,
            offset: {
              x: -0.3,
              y: -0.162
            },
            transition: {
              in: 'fade',
              out: 'fade'
            },
            fit: 'none',
            scale: 1
          }
        ]
      },
      {
        clips: [
          {
            asset: {
              type: 'text',
              text: 'Bedrooms: {{ bedrooms }}',
              font: {
                family: 'Manrope Light',
                color: '{{ secondaryColor }}',
                size: 18
              },
              alignment: {
                horizontal: 'left'
              },
              width: 125,
              height: 26
            },
            start: 1.4,
            length: 4,
            offset: {
              x: -0.395,
              y: 0.036
            },
            transition: {
              in: 'fade',
              out: 'fade'
            },
            fit: 'none',
            scale: 1,
            position: 'center'
          }
        ]
      },
      {
        clips: [
          {
            asset: {
              type: 'text',
              text: 'Bathrooms: {{ bathrooms }}',
              font: {
                family: 'Manrope Light',
                color: '{{ secondaryColor }}',
                size: 18
              },
              alignment: {
                horizontal: 'left'
              },
              width: 125,
              height: 26
            },
            start: 1.4,
            length: 4,
            offset: {
              y: -0.02,
              x: -0.395
            },
            transition: {
              in: 'fade',
              out: 'fade'
            },
            fit: 'none',
            scale: 1,
            position: 'center'
          }
        ]
      },
      {
        clips: [
          {
            asset: {
              type: 'text',
              text: 'Carports: {{ cars }}',
              font: {
                family: 'Manrope Light',
                color: '{{ secondaryColor }}',
                size: 18
              },
              alignment: {
                horizontal: 'left'
              },
              width: 125,
              height: 26
            },
            start: 1.4,
            length: 4,
            offset: {
              y: -0.078,
              x: -0.395
            },
            transition: {
              in: 'fade',
              out: 'fade'
            },
            fit: 'none',
            scale: 1,
            position: 'center'
          }
        ]
      },
      {
        clips: [
          {
            asset: {
              type: 'luma',
              src: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/luma-mattes/circle.jpg'
            },
            start: 30,
            length: 6
          },
          {
            asset: {
              type: 'image',
              src: '{{ agentPicture }}'
            },
            start: 30,
            length: 6,
            fit: 'none',
            scale: 0.4,
            offset: {
              x: 0,
              y: 0.22
            },
            transition: {
              in: 'fade'
            },
            position: 'center'
          }
        ]
      },
      {
        clips: [
          {
            asset: {
              type: 'text',
              text: '{{ agentName }}',
              font: {
                family: 'Manrope ExtraBold',
                color: '#f0c20c',
                size: 26
              },
              alignment: {
                horizontal: 'center',
                vertical: 'center'
              },
              width: 600,
              height: 36
            },
            start: 30,
            length: 6,
            offset: {
              x: 0,
              y: 0.03
            },
            transition: {
              in: 'fade'
            },
            fit: 'none',
            scale: 1
          }
        ]
      },
      {
        clips: [
          {
            asset: {
              type: 'text',
              text: '{{ agentEmail }}',
              font: {
                family: 'Manrope Light',
                color: '#ffffff',
                size: 18
              },
              alignment: {
                horizontal: 'center',
                vertical: 'center'
              },
              width: 600,
              height: 64
            },
            start: 30,
            length: 6,
            offset: {
              x: 0,
              y: -0.24
            },
            transition: {
              in: 'fade'
            },
            fit: 'none',
            scale: 1
          }
        ]
      },
      {
        clips: [
          {
            asset: {
              type: 'image',
              src: '{{ agencyLogo }}'
            },
            start: 30,
            length: 6,
            fit: 'none',
            scale: 0.26,
            offset: {
              x: 0,
              y: -0.1
            },
            transition: {
              in: 'fade'
            },
            position: 'center'
          }
        ]
      },
      {
        clips: [
          {
            asset: {
              type: 'video',
              src: 'https://templates.shotstack.io/basic/asset/video/overlay/{{overlayStyle}}/{{overlayColor}}/content-left-in.mov'
            },
            start: 0,
            length: 4.48
          },
          {
            asset: {
              type: 'video',
              src: 'https://templates.shotstack.io/basic/asset/video/overlay/{{overlayStyle}}/{{overlayColor}}/content-left-out.mov'
            },
            start: 4.52,
            length: 2
          },
          {
            asset: {
              type: 'video',
              src: 'https://templates.shotstack.io/basic/asset/video/overlay/{{overlayStyle}}/{{overlayColor}}/transition-right.mov'
            },
            start: 10.56,
            length: 3
          },
          {
            asset: {
              type: 'video',
              src: 'https://templates.shotstack.io/basic/asset/video/overlay/{{overlayStyle}}/{{overlayColor}}/transition-up.mov'
            },
            start: 16.56,
            length: 3
          },
          {
            asset: {
              type: 'video',
              src: 'https://templates.shotstack.io/basic/asset/video/overlay/{{overlayStyle}}/{{overlayColor}}/transition-left.mov'
            },
            start: 22.56,
            length: 3
          },
          {
            asset: {
              type: 'video',
              src: 'https://templates.shotstack.io/basic/asset/video/overlay/{{overlayStyle}}/{{overlayColor}}/outro-in.mov'
            },
            start: 29,
            length: 7
          }
        ]
      },
      {
        clips: [
          {
            asset: {
              type: 'image',
              src: '{{ image1 }}'
            },
            start: 0,
            length: 6,
            effect: 'zoomInSlow',
            transition: {
              in: 'fade'
            },
            position: 'center',
            scale: 1
          },
          {
            asset: {
              type: 'image',
              src: '{{ image2 }}'
            },
            start: 6,
            length: 6,
            effect: 'slideLeftSlow',
            position: 'center',
            scale: 1
          },
          {
            asset: {
              type: 'image',
              src: '{{ image3 }}'
            },
            start: 12,
            length: 6,
            effect: 'slideRightSlow',
            position: 'center'
          },
          {
            asset: {
              type: 'image',
              src: '{{ image4 }}'
            },
            start: 18,
            length: 6,
            effect: 'slideUpSlow',
            position: 'center'
          },
          {
            asset: {
              type: 'image',
              src: '{{ image5 }}'
            },
            start: 24,
            length: 6,
            effect: 'slideLeftSlow'
          },
          {
            asset: {
              type: 'image',
              src: '{{ image1 }}'
            },
            start: 30,
            length: 6,
            effect: 'zoomInSlow',
            position: 'center'
          }
        ]
      },
      {
        clips: [
          {
            asset: {
              type: 'audio',
              src: 'https://shotstack-ingest-api-v1-sources.s3.ap-southeast-2.amazonaws.com/wzr6y0wtti/zzy8xbj5-0w3y-kd0l-vryy-2tcai33lfclo/source.mp3',
              volume: 1,
              effect: 'fadeOut'
            },
            start: 0,
            length: 36
          }
        ]
      }
    ]
  },
  output: {
    format: 'mp4',
    fps: 25,
    size: {
      width: 1024,
      height: 576
    }
  },
  merge: [
    {
      find: 'address',
      replace: '192 STOREY STREET'
    },
    {
      find: 'suburb',
      replace: 'MAROUBRA'
    },
    {
      find: 'state',
      replace: 'NSW'
    },
    {
      find: 'postcode',
      replace: '2035'
    },
    {
      find: 'bedrooms',
      replace: '4'
    },
    {
      find: 'bathrooms',
      replace: '2'
    },
    {
      find: 'cars',
      replace: '1'
    },
    {
      find: 'propertyType',
      replace: 'AUCTION'
    },
    {
      find: 'price',
      replace: '$1,000,000'
    },
    {
      find: 'image1',
      replace:
        'https://shotstack-assets.s3.ap-southeast-2.amazonaws.com/images/realestate1.jpg'
    },
    {
      find: 'image2',
      replace:
        'https://shotstack-assets.s3.ap-southeast-2.amazonaws.com/images/realestate2.jpg'
    },
    {
      find: 'image3',
      replace:
        'https://shotstack-assets.s3.ap-southeast-2.amazonaws.com/images/realestate3.jpg'
    },
    {
      find: 'image4',
      replace:
        'https://shotstack-assets.s3.ap-southeast-2.amazonaws.com/images/realestate4.jpg'
    },
    {
      find: 'image5',
      replace:
        'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/realestate5.jpg'
    },
    {
      find: 'agentPicture',
      replace:
        'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/real-estate-agent-male.jpg'
    },
    {
      find: 'agentName',
      replace: 'JEREMY SIMPSON'
    },
    {
      find: 'agentEmail',
      replace: 'jeremy@blockrealestate.co'
    },
    {
      find: 'agencyLogo',
      replace:
        'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/logos/real-estate-white.png'
    },
    {
      find: 'overlayStyle',
      replace: 'arrow-sharp'
    },
    {
      find: 'overlayColor',
      replace: 'white'
    },
    {
      find: 'primaryColor',
      replace: '#f0c20c'
    },
    {
      find: 'secondaryColor',
      replace: '#ffffff'
    }
  ]
};
