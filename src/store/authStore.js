import { create } from "zustand";
import axios from "axios";

const API_URL = 'http://localhost:4000/api'

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
	user: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,
	clinicList: [],

	signup: async (email, password, name) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/admin/add-admin`, { email, password, name });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},
	login: async (name, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/admin/login-admin`, { name, password });
			console.log("we are taking data from login")
			console.log(response)
			set({
				isAuthenticated: true,
				user: response.data.user,
				error: null,
				isLoading: false,
			});
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},

	logout: async () => {
		set({ isLoading: true, error: null });
		try {
			await axios.post(`${API_URL}/logout`);
			set({ user: null, isAuthenticated: false, error: null, isLoading: false });
		} catch (error) {
			set({ error: "Error logging out", isLoading: false });
			throw error;
		}
	},
	verifyEmail: async (code) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/verify-email`, { code });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
			return response.data;
		} catch (error) {
			set({ error: error.response.data.message || "Error verifying email", isLoading: false });
			throw error;
		}
	},
	checkAuth: async () => {
		set({ isCheckingAuth: true, error: null });
		try {
			const response = await axios.get(`${API_URL}/admin/check-auth`);
			alert(response)
			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
		} catch (error) {
			console.log(error)
			set({ error: null, isCheckingAuth: false, isAuthenticated: false });
		}
	},
	// forgotPassword: async (email) => {
	// 	set({ isLoading: true, error: null });
	// 	try {
	// 		const response = await axios.post(`${API_URL}/forgot-password`, { email });
	// 		set({ message: response.data.message, isLoading: false });
	// 	} catch (error) {
	// 		set({
	// 			isLoading: false,
	// 			error: error.response.data.message || "Error sending reset password email",
	// 		});
	// 		throw error;
	// 	}
	// },
	// resetPassword: async (token, password) => {
	// 	set({ isLoading: true, error: null });
	// 	try {
	// 		const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
	// 		set({ message: response.data.message, isLoading: false });
	// 	} catch (error) {
	// 		set({
	// 			isLoading: false,
	// 			error: error.response.data.message || "Error resetting password",
	// 		});
	// 		throw error;
	// 	}
	// },



	// !! Note:here we are adding add clinic api
	addClinic: async (clinicName, email, phone_number, address, city, state, pinCode, subdomain, modulePermissions, activationDate, usersAllowed, salesBy_name, salesBy_email, globalLabel1, globalLabel2) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/clinic/add-clinic`, { clinicName, email, phone_number, address, city, state, pinCode, subdomain, modulePermissions, activationDate, usersAllowed, salesBy_name, salesBy_email, globalLabel1, globalLabel2 });
			set({ isLoading: false });
		} catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},

	getClinicList: async () => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.get(`${API_URL}/clinic/list-clinic`);
			set({ clinicList: response.data.clinics, isLoading: false });
		} catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},
}));