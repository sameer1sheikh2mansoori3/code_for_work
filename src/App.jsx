import { Routes, Route, Navigate } from "react-router-dom";
import ClinicManagement from "./pages/ClinicManagement";
import AddClinic from "./pages/AddClinic";
import AddClinicFilled from "./pages/AddClinicFilled";
import ClinicView from "./pages/ClinicView";
import Login from "./pages/Login";
import ClinicManagementList from "./pages/ClinicManagementList";
import { ChevronDown } from "lucide-react";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

import BedMaster from "./pages/clinic_admin/BedMaster";
import AddBed from "./components/AddBed";
import DoctorManagement from "./pages/clinic_admin/Add_Doctor";
import DoctorsPage from "./pages/clinic_admin/DoctorPage";
import AddCategory from "./components/AddCategory";
import ServiceMaster from "./pages/clinic_admin/Service/ServiceMaster";
import TariffMaster from "./pages/clinic_admin/Tarrif/Terif";
import TemplateBuilder from "./pages/clinic_admin/Templates/Templates";
import NewPatient from "./pages/Reception/NewPatient";
import PatientMaster from "./pages/Reception/PatientMaster";
import Services from "./pages/Reception/Services";
import NotFound from "./pages/NotFound";
import Reception from "./pages/Reception/Reception";
// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  const { isAuthenticated, user } = useAuthStore();
  console.log(user);
  console.log("i am in app");
  // !! Note:
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;
  return (
    <>
      {/* Header */}
      {/* <div className="bg-[#006B5D] p-4 mb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-white">Clinic Management</h1>
        <div className="flex items-center gap-2 text-white">
          {
            isAuthenticated ? <>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#006B5D]">
            AE
          </div>
          <span>Alison Eyo</span>
            </> : <></>
          }
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div> */}

      {/* NOTE: Yha pr hm bedmaster navbar lga rhe hai jisse wapas lag diya gayega */}
      {/* <BedMaster /> */}

      <Routes>
        {/* <Route path="/" element={
      isAuthenticated ? <>
        <Login/>
      </> : <>
      <Navigate to='/add' replace />;
      </>
    } /> */}
        {/* <Route path="/login" element={<Login />} />
      <Route path="/add" element={
        <ProtectedRoute>
							<ClinicManagement />
						</ProtectedRoute>
            } />
      <Route path="/Clinics" element={
        <ProtectedRoute>
							<AddClinic />
						</ProtectedRoute>
        } />
       
      <Route path="/addClinicsFilled" element={
        <ProtectedRoute>
							<AddClinicFilled />
						</ProtectedRoute>
        } /> */}

        <Route path="/bed-master" element={<AddBed />}></Route>
        <Route path="/bed-master/ward" element={<AddBed />}></Route>
        <Route path="/bed-master/room" element={<AddBed />}></Route>
        <Route path="/bed-master/bed" element={<AddBed />}></Route>

        <Route path="/sameer" element={<DoctorsPage />}></Route>
        <Route path="/doctors" element={<DoctorManagement />}></Route>
        <Route
          path="/clinicView"
          element={
            <ProtectedRoute>
              <ClinicView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/clinicManagementList"
          element={
            <ProtectedRoute>
              <ClinicManagementList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/clinic_admin/AddBed"
          element={
            // <ProtectedRoute>
            <AddBed />
            // </ProtectedRoute>
          }
        />

        {/* ____________we are adding routes______________ */}

        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="/services" element={<ServiceMaster />} />
        <Route path="/tariff" element={<TariffMaster />} />
        <Route path="/templates" element={<TemplateBuilder />} />

        {/* we are adding /reception module */}

        {/* Parent Route */}
        <Route path="/reception" element={<Reception />}>
          {/* Nested Routes */}
          <Route index element={<NewPatient />} />
          <Route path="new-patient" element={<NewPatient />} />
          <Route path="patient-master" element={<PatientMaster />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
