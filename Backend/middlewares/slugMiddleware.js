// Middleware to generate a slug from the product name
export const generateSlug = (req, res, next) => {
  if (req.body.name) {
    req.body.slug = req.body.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  next();
};
