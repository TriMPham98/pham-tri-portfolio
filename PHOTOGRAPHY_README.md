# Photography Portfolio

This is a dedicated photography portfolio subpage for Tri Pham's website.

## Features

- **Responsive Masonry Layout**: Photos are displayed in a beautiful masonry grid that adapts to different screen sizes
- **Category Filtering**: Filter photos by category (Wedding, Portrait, Music, etc.)
- **Lightbox Gallery**: Click on any photo to view it in full size with navigation
- **Smooth Animations**: Framer Motion animations for a polished user experience
- **Mobile Optimized**: Fully responsive design that works on all devices

## Adding New Photos

To add new photos to the portfolio:

1. **Add your images** to the `public/images/photography/` directory
2. **Update the photos array** in `src/components/PhotoGallery.tsx`:

```typescript
const photos = [
  {
    id: 1,
    src: "/images/photography/your-photo.jpg",
    alt: "Description of your photo",
    title: "Photo Title",
    category: "Category Name", // e.g., "Wedding", "Portrait", "Landscape"
    description: "Detailed description of the photo",
  },
  // Add more photos here...
];
```

## Photo Categories

Current categories include:

- Wedding
- Portrait
- Music
- Landscape (you can add this)
- Street (you can add this)
- Nature (you can add this)

You can create new categories by simply adding them to the `category` field in the photos array.

## Image Optimization

For best performance:

- Use optimized images (WebP format recommended)
- Keep file sizes reasonable (under 2MB for web)
- Consider using different sizes for thumbnails and full-size views

## Customization

You can customize the gallery by modifying:

- **Grid columns**: Change the `columns-*` classes in the grid container
- **Animation timing**: Adjust the `delay` values in the motion components
- **Colors and styling**: Update the Tailwind classes
- **Lightbox behavior**: Modify the lightbox component logic

## Navigation

The photography portfolio is accessible via:

- Direct URL: `/photography`
- Navigation menu: "Photography" link in the header
- The navigation automatically adapts based on the current page

## Technical Details

- Built with Next.js 14 and React 18
- Styled with Tailwind CSS
- Animations powered by Framer Motion
- Icons from Lucide React
- Fully TypeScript enabled
