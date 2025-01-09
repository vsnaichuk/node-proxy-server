export const transformMeteorData = (m: any) => {
	const meters = m.estimated_diameter.meters;
	const diameterMin = meters.estimated_diameter_min;
	const diameterMax = meters.estimated_diameter_max;
	const avgDiameterMeters = (diameterMin + diameterMax) / 2;
	const approachData = m.close_approach_data[0];
	return {
		id: m.id,
		name: m.name,
		diameter_meters: avgDiameterMeters,
		is_potentially_hazardous_asteroid: m.is_potentially_hazardous_asteroid,
		close_approach_date_full: approachData.close_approach_date_full,
		relative_velocity_kps: approachData.relative_velocity.kilometers_per_second,
	};
};
