import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
// import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
export const Addmembers = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setname] = useState("");
  const [registration, setregistration] = useState("");
  const [branch, setbranch] = useState("");
  const [year, setyear] = useState("");
  const [team, setteam] = useState("");
  const [teamType, setteamtype] = useState("core team member");
  const [profilePhoto, setFile] = useState();
  const [image, setImage] = useState();
  const [resp, setres] = useState();
  const [auth, setauth] = useState(false);
  const authenticate = async () => {
    const value = localStorage.getItem("email");

    if (!value) {
      setauth(false);
      navigate("/login");
    } else {
      const ans = await axios.post(
        "https://gds-cnitjsr-offical.vercel.app/api/user/authenticate",
        {
          email: value,
        }
      );

      if (ans && ans.data.success) {
        setauth(true);
        console.log(value);
        console.log(ans);
      } else {
        setauth(false);
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    authenticate();
  }, [localStorage.getItem("email")]);
  const handleChangename = (e) => {
    setname(e.target.value);
  };

  const handleChangeregistraion = (e) => {
    setregistration(e.target.value);
  };

  const handleChangebranch = (e) => {
    setbranch(e.target.value);
  };
  const handleChangeteam = (e) => {
    setteam(e.target.value);
  };
  const handleChangeteamtype = (e) => {
    setteamtype(e.target.value);
  };
  const handleChangeyear = (e) => {
    setyear(e.target.value);
  };
  const handleUploadImage = (e) => {
    const imgfile = e.target.files[0];
    setFile(imgfile);
    if (imgfile) {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        setImage(reader.result);
      };
      reader.readAsDataURL(imgfile);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
     setLoading(true)
    if (auth === false) {
      alert("not authenticated");
      setLoading(false)
      navigate("/login");
    }
    console.log(profilePhoto);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("registration", registration);
      formData.append("team", team);
      formData.append("teamType", teamType);
      formData.append("year", year);
      formData.append("branch", branch);
      formData.append("profilePhoto", profilePhoto);
      console.log(profilePhoto);
      const res = await axios.post(
        "https://gds-cnitjsr-offical.vercel.app/api/user/addmember",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res && res.data.success) {
        console.log("response for image  is ", res.data.newUser.imageurl);
        setres(res);
        //alert(res.data.msg);
        toast.success(res.data.msg)
        setLoading(false)
      } else {
        toast.error(res.data.msg);
        setLoading(false)
      }
    } catch (error) {
      console.error("Error during signup:", error);
      //alert("error");
      toast.error(error)
      setLoading(false)
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      {loading && <Spinner />}
      
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h1 className="text-center">Addmember</h1>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} >
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      NAME:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={name}
                      onChange={handleChangename}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="registration" className="form-label">
                      Registration NO.:
                    </label>
                    <input
                      type="text"
                      id="registration"
                      name="registration"
                      value={registration}
                      onChange={handleChangeregistraion}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="branch" className="form-label">
                      Branch.:
                    </label>
                    <input
                      type="text"
                      id="branch"
                      name="branch"
                      value={branch}
                      onChange={handleChangebranch}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="year" className="form-label">
                      Year.:
                    </label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={year}
                      onChange={handleChangeyear}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="team" className="form-label">
                      Position.:
                    </label>
                    <input
                      type="text"
                      id="team"
                      name="team"
                      value={team}
                      onChange={handleChangeteam}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="profilePhoto" className="form-label">
                      Profile.:
                    </label>
                    <input
                      type="file"
                      id="profilePhoto"
                      accept="image/*"
                      name="profilePhoto"
                      onChange={handleUploadImage}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="type" className="form-label">
                      teamType:
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={teamType}
                      onChange={handleChangeteamtype}
                      className="form-select"
                    >
                      <option value="core team member">core team member</option>
                      <option value="lead">lead</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary bg-primary">
                    ADD MEMBER
                  </button>
                </form>
                {resp && (
                  <>
                    <img
                      src={`https://gds-cnitjsr-offical.vercel.app/${resp.data.newUser.imageurl}`}
                      alt="User"
                    />
                    {console.log(
                      `https://gds-cnitjsr-offical.vercel.app/${resp.data.newUser.imageurl}`
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};
