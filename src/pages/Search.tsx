import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import CommentCard from "../components/CommentCard";
import { useGetCommentsQuery } from "../services/jsonPlaceholderApi";
import CartModal from "../components/CartModal";
import { CommentInterface } from "../services/types";

function Search() {
  const { data, isLoading, error } = useGetCommentsQuery(undefined);
  const [commentData, setCommentData] = useState<
    CommentInterface[] | undefined
  >(undefined);

  useEffect(() => {
    setCommentData(data);
  }, [data]);

  const saveModalData = (
    title: string,
    text: string,
    it: number | undefined
  ): void => {
    setCommentData(
      commentData?.map((comment) =>
        comment.it === it ? { ...comment, name: title, body: text } : comment
      )
    );
  };

  return (
    <Box>
      <Header resultsCount={data?.length} />
      {isLoading && <Typography>Loading....</Typography>}
      <Grid container spacing={4} p={3} sx={{ alignItems: "stretch" }}>
        {!isLoading &&
          commentData &&
          commentData.map((comment) => (
            <CommentCard
              key={comment.it}
              title={comment.name}
              text={comment.body}
              it={comment.it}
            />
          ))}
      </Grid>
      <CartModal saveModalData={saveModalData} />
    </Box>
  );
}

export default Search;
