import React, { useEffect, useState } from "react";
import {
  CustomBoxForFilePreviewer,
  FilePreviewerWrapper,
  IconButtonImagePreviewer,
} from "./FilePreviewer.style";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { Grid, Stack, useMediaQuery } from "@mui/material";
import FileInputField from "../form-fields/FileInputField";
import pdfIcon from "./assets/pdf.png";
import docIcon from "./assets/docx.png";
import txtIcon from "./assets/txt-file.png";
import folderIcon from "./assets/folder.png";
import CustomImageContainer from "../CustomImageContainer";

const FilePreviewer = (props) => {
  const {
    file,
    anchor,
    deleteImage,
    hintText,
    width,
    onChange,
    onDelete,
    errorStatus,
    acceptedFileInput,
    label,
    titleText,
    gridControl,
    prescription,
  } = props;

  const [multipleImages, setMultipleImages] = useState([]);
  const matches = useMediaQuery("(min-width:400px)");
  useEffect(() => {
    if (file?.length > 0) {
      const newImages = [];
      file.forEach((image) =>
        newImages.push({
          url: URL.createObjectURL(image),
          type: image.name.split(".").pop(),
        })
      );
      setMultipleImages(newImages);
    }
  }, [file]);

  // Rest of your component code...

  return (
    <Stack width="100%" alignItems="center" spacing={3}>
      {renderFilePreview()}
      {hintText && <Typography>{hintText}</Typography>}
    </Stack>
  );
};

FilePreviewer.propTypes = {};

export default FilePreviewer;
