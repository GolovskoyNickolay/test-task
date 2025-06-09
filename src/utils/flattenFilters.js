const flattenFilters = (filters) => {
  const result = {};

  const vehicleTypeKey = Object.keys(filters.vehicleType).find(
    (key) => filters.vehicleType[key] === true
  );
  if (vehicleTypeKey) {
    result.form = vehicleTypeKey;
  }

  if (filters.vehicleEquipment.automatic) {
    result.transmission = "automatic";
  }

  Object.keys(filters.vehicleEquipment).forEach((key) => {
    if (filters.vehicleEquipment[key] && key !== "automatic") {
      result[key] = true;
    }
  });

  if (filters.location && filters.location.trim() !== "") {
    result.location = filters.location.trim();
  }

  return result;
};

export default flattenFilters;
