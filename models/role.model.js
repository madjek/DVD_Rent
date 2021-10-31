module.exports = mongoose => {
    const Role = mongoose.model(
      "role",
      mongoose.Schema(
        {
          name: String,
        }
      )
    );
      return Role;
  };