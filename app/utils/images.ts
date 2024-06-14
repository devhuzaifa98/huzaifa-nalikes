import { createCanvas, loadImage } from "canvas";
const segmentHeight = 115;
const gapHeight = 25;
const offsets = [100, -30, 20, 10, 7, 20];

async function cropImageInSegments(
  inputImagePath: string,
  splitVertical: boolean
) {
  try {
    const image = await loadImage(inputImagePath);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, image.width, image.height);

    // Calculate the number of segments and last segment height
    const numSegments = Math.ceil(image.height / (segmentHeight + gapHeight));
    const lastSegmentHeight = image.height % (segmentHeight + gapHeight);

    const segmentsArray = [];

    for (let i = 0; i < numSegments; i++) {
      // Calculate crop parameters for current segment
      const top = i * (segmentHeight + gapHeight);
      const cropHeight =
        i === numSegments - 1 && lastSegmentHeight !== 0
          ? lastSegmentHeight
          : segmentHeight;

      // Split the segment vertically from the center if required
      if (splitVertical) {
        // Calculate crop parameters for current segment
        const top = i * (segmentHeight + gapHeight);
        const cropHeight =
          i === numSegments - 1 && lastSegmentHeight !== 0
            ? lastSegmentHeight
            : segmentHeight;

        // Get the offset for the current segment
        const offset = offsets[i] || 0;
        const center = Math.floor(image.width / 2);
        const splitPoint = center + offset;

        // Create canvas for left half
        const leftCanvas = createCanvas(splitPoint, cropHeight);
        const leftCtx = leftCanvas.getContext("2d");
        leftCtx.drawImage(
          canvas,
          0,
          top,
          splitPoint,
          cropHeight,
          0,
          0,
          splitPoint,
          cropHeight
        );

        // Create canvas for right half
        const rightCanvas = createCanvas(image.width - splitPoint, cropHeight);
        const rightCtx = rightCanvas.getContext("2d");
        rightCtx.drawImage(
          canvas,
          splitPoint,
          top,
          image.width - splitPoint,
          cropHeight,
          0,
          0,
          image.width - splitPoint,
          cropHeight
        );

        // Convert left and right halves to base64 strings
        const leftSegmentBase64 = leftCanvas.toDataURL("image/png");
        const rightSegmentBase64 = rightCanvas.toDataURL("image/png");

        segmentsArray.push([leftSegmentBase64, rightSegmentBase64]);
      } else {
        // Create canvas for the segment
        const segmentCanvas = createCanvas(image.width, cropHeight);
        const segmentCtx = segmentCanvas.getContext("2d");
        segmentCtx.drawImage(
          canvas,
          0,
          top,
          image.width,
          cropHeight,
          0,
          0,
          image.width,
          cropHeight
        );

        // Convert segment to base64 string
        const segmentBase64 = segmentCanvas.toDataURL("image/png");
        segmentsArray.push([segmentBase64]);
      }
    }

    return segmentsArray;
  } catch (err) {
    console.error("Error cropping image:", err);
  }
}

export { cropImageInSegments };
