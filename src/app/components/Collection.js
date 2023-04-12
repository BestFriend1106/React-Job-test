import { useEffect } from "react";
import * as React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  getCollections,
  selectCollections,
} from "../../features/collection/collectionSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getTags, selectTags } from "../../features/tag/tagSlice";

import { getItems, selectItems } from "../../features/item/itemSlice";

import {
  List,
  ListItem,
  ListItemText,
  Grid,
  InputLabel,
  MenuItem,
  Box,
  Select,
  Link,
  Button,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { FormControl } from "@material-ui/core";

function Collection() {
  let collections = useSelector(selectCollections);
  let tags = useSelector(selectTags);
  let items = useSelector(selectItems);

  const [tag, setTags] = React.useState("All");
  const [collection, setCollections] = React.useState("Collections");

  const handleSelect = (val) => {
    setCollections(val);
    console.log(val);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setTags(event.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollections());
    dispatch(getTags());
    dispatch(getItems());
  }, []);

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <List
            sx={{
              bgcolor: "background.paper",
              padding: "20px",
              marginTop: "100px",
            }}
          >
            <ListItem alignItems="flex-start" key={0}>
              <ListItemText
                sx={{ fontSize: "40px", cursor: "pointer" }}
                primary="Collections"
                primaryTypographyProps={{ fontSize: "25px" }}
                onClick={() => handleSelect("Collections")}
              />
            </ListItem>
            {collections.payload.map((item, key) => (
              <ListItem alignItems="flex-start" key={key}>
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  primary={item}
                  primaryTypographyProps={{ paddingLeft: "15px" }}
                  onClick={() => handleSelect(item)}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={8}
          xl={8}
          sx={{ marginTop: "100px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  marginBottom: "30px",
                  width: "100%",
                }}
              >
                <FormControl>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{
                        width: "50px",
                        paddingRight: "10px",
                        textAlign: "right",
                      }}
                    >
                      Tags
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={tag}
                      label="Tags"
                      onChange={handleChange}
                      sx={{ width: "150px" }}
                    >
                      <MenuItem value={"All"} key={"All"}>
                        All
                      </MenuItem>
                      {tags.payload.map((item, key) => (
                        <MenuItem value={item} key={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  marginBottom: "30px",
                  width: "100%",
                }}
              >
                <Button variant="outlined">Cart</Button>
              </div>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <div sx={{ width: "100%" }}></div>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            {items.payload.map((item, key) =>
              tag == "All" ? (
                collection == "Collections" ? (
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    alignItems="flex-center"
                    key={item.id}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "250px",
                        padding: "20px",
                        border: "solid 1px gray",
                        color: "black",
                      }}
                    >
                      <Link
                        href={item}
                        key={key}
                        sx={{
                          textDecoration: "none",
                        }}
                      >
                        <img
                          src={item.picture}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "60%",
                            marginBottom: "10px",
                          }}
                        />
                        <Grid container spacing={1}>
                          <Grid
                            item
                            xs={5}
                            sm={5}
                            md={5}
                            lg={5}
                            xl={5}
                            alignItems="flex-center"
                            fontSize="20px"
                            color="darkBlue"
                          ></Grid>
                          <Grid
                            item
                            xs={3}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            alignItems="flex-center"
                            fontSize="20px"
                          >
                            <ShoppingCartIcon />
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            sm={4}
                            md={4}
                            lg={4}
                            xl={4}
                            alignItems="flex-center"
                          >
                            {item.price}
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          xl={12}
                          alignItems="flex-start"
                          fontSize="20px"
                          color="darkBlue"
                        >
                          {item.title}
                        </Grid>
                      </Link>
                    </Box>
                  </Grid>
                ) : collection == item.collections ? (
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    alignItems="flex-center"
                    key={item.id}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "250px",
                        padding: "20px",
                        border: "solid 1px gray",
                        color: "black",
                      }}
                    >
                      <Link
                        href={item}
                        key={key}
                        sx={{
                          textDecoration: "none",
                        }}
                      >
                        <img
                          src={item.picture}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "60%",
                            marginBottom: "10px",
                          }}
                        />
                        <Grid container spacing={1}>
                          <Grid
                            item
                            xs={5}
                            sm={5}
                            md={5}
                            lg={5}
                            xl={5}
                            alignItems="flex-center"
                            fontSize="20px"
                            color="darkBlue"
                          ></Grid>
                          <Grid
                            item
                            xs={3}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            alignItems="flex-center"
                            fontSize="20px"
                          >
                            <ShoppingCartIcon />
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            sm={4}
                            md={4}
                            lg={4}
                            xl={4}
                            alignItems="flex-center"
                          >
                            {item.price}
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          xl={12}
                          alignItems="flex-start"
                          fontSize="20px"
                          color="darkBlue"
                        >
                          {item.title}
                        </Grid>
                      </Link>
                    </Box>
                  </Grid>
                ) : null
              ) : tag == item.tags[0] || tag == item.tags[1] ? (
                collection == "Collections" ? (
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    alignItems="flex-center"
                    key={item.id}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "250px",
                        padding: "20px",
                        border: "solid 1px gray",
                        color: "black",
                      }}
                    >
                      <Link
                        href={item}
                        key={key}
                        sx={{
                          textDecoration: "none",
                        }}
                      >
                        <img
                          src={item.picture}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "60%",
                            marginBottom: "10px",
                          }}
                        />
                        <Grid container spacing={1}>
                          <Grid
                            item
                            xs={5}
                            sm={5}
                            md={5}
                            lg={5}
                            xl={5}
                            alignItems="flex-center"
                            fontSize="20px"
                            color="darkBlue"
                          ></Grid>
                          <Grid
                            item
                            xs={3}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            alignItems="flex-center"
                            fontSize="20px"
                          >
                            <ShoppingCartIcon />
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            sm={4}
                            md={4}
                            lg={4}
                            xl={4}
                            alignItems="flex-center"
                          >
                            {item.price}
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          xl={12}
                          alignItems="flex-start"
                          fontSize="20px"
                          color="darkBlue"
                        >
                          {item.title}
                        </Grid>
                      </Link>
                    </Box>
                  </Grid>
                ) : collection == item.collections ? (
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    alignItems="flex-center"
                    key={item.id}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "250px",
                        padding: "20px",
                        border: "solid 1px gray",
                        color: "black",
                      }}
                    >
                      <Link
                        href={item}
                        key={key}
                        sx={{
                          textDecoration: "none",
                        }}
                      >
                        <img
                          src={item.picture}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "60%",
                            marginBottom: "10px",
                          }}
                        />
                        <Grid container spacing={1}>
                          <Grid
                            item
                            xs={5}
                            sm={5}
                            md={5}
                            lg={5}
                            xl={5}
                            alignItems="flex-center"
                            fontSize="20px"
                            color="darkBlue"
                          ></Grid>
                          <Grid
                            item
                            xs={3}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            alignItems="flex-center"
                            fontSize="20px"
                          >
                            <ShoppingCartIcon />
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            sm={4}
                            md={4}
                            lg={4}
                            xl={4}
                            alignItems="flex-center"
                          >
                            {item.price}
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          xl={12}
                          alignItems="flex-start"
                          fontSize="20px"
                          color="darkBlue"
                        >
                          {item.title}
                        </Grid>
                      </Link>
                    </Box>
                  </Grid>
                ) : null
              ) : null
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Collection;
