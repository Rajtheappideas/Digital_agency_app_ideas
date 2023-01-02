// thigns to do
// 1.change static id to dynamic id in project,blog,events & service

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getbaseurl } from "../BaseUrl";

export const getBlogs = createAsyncThunk("content/getBlogs", async () => {
  const response = await getbaseurl("blog")
    .then((res) => {
      return res.data.blogs;
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return response;
});

export const getBlogsById = createAsyncThunk(
  "content/getBlogsById",
  async () => {
    const response = await getbaseurl(`blog/639c052312376862d89358e8`)
      .then((res) => {
        console.log(res.data);
        return res.data.blog;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    return response;
  }
);

export const getProjects = createAsyncThunk("content/getProjects", async () => {
  const response = await getbaseurl("project")
    .then((res) => {
      return res.data.projects;
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return response;
});

export const getProjectsById = createAsyncThunk(
  "content/getProjectsById",
  async () => {
    const response = await getbaseurl(`project/63a14457df783f1291fd4a61`)
      .then((res) => {
        return res.data.project;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    return response;
  }
);

export const getServices = createAsyncThunk("content/getServices", async () => {
  const response = await getbaseurl("service")
    .then((res) => {
      return res.data.services;
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return response;
});

export const getServicesById = createAsyncThunk(
  "content/getServicesById",
  async () => {
    const response = await getbaseurl(`service/63a2b8d6b0104574350556f7`)
      .then((res) => {
        return res.data.service;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    return response;
  }
);

export const getEvents = createAsyncThunk("content/getEvents", async () => {
  const response = await getbaseurl("event")
    .then((res) => {
      return res.data.events;
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return response;
});

export const getEventsById = createAsyncThunk(
  "content/getEventsById",
  async () => {
    const response = await getbaseurl(`event/63b26e0033fa7bc13f8894ee`)
      .then((res) => {
        return res.data.event;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    return response;
  }
);

export const getFaqs = createAsyncThunk("content/getFaqs", async () => {
  const response = await getbaseurl(`faqs`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return response;
});

export const getPrivacy = createAsyncThunk("content/getPrivacy", async () => {
  const response = await getbaseurl(`privacy`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return response;
});

export const getTerms = createAsyncThunk("content/getTerms", async () => {
  const response = await getbaseurl(`terms`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return response;
});

const initialState = {
  loading: false,
  success: false,
  error: null,
  blogs: [],
  projects: [],
  services: [],
  evetns: [],
  blog: {},
  project: {},
  service: {},
  event: {},
  privacy: {},
  faqs: [],
  terms: {},
};

const ContentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: {
    // get blogs
    [getBlogs.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getBlogs.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.blogs = payload;
    },
    [getBlogs.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
    // get blogs by id
    [getBlogsById.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getBlogsById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.blog = payload;
    },
    [getBlogsById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
    // get projects
    [getProjects.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getProjects.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.projects = payload;
    },
    [getProjects.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
    // get project by id
    [getProjectsById.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getProjectsById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.project = payload;
    },
    [getProjectsById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
    // get services
    [getServices.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getServices.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.services = payload;
    },
    [getServices.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
    // get service by id
    [getServicesById.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getServicesById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.service = payload;
    },
    [getServicesById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
    // get events
    [getEvents.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getEvents.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.evetns = payload;
    },
    [getEvents.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
    // get event by id
    [getEventsById.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getEventsById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.event = payload;
    },
    [getEventsById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
    // get faqs
    [getFaqs.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getFaqs.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.faqs = payload.content;
    },
    [getFaqs.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
    // get privacy
    [getPrivacy.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getPrivacy.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.privacy = payload.page;
    },
    [getPrivacy.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
    // get terms
    [getTerms.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getTerms.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.terms = payload.page;
    },
    [getTerms.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
  },
});

export const {} = ContentSlice.actions;

export default ContentSlice.reducer;
