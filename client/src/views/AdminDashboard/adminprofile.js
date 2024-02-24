import React, { useContext, useEffect } from 'react';
import { AdminDashboardSideBar } from '../../components/common';
import ProfilePicture from '../../assets/profilepicture.webp';
import AuthContext from '../../context/auth/authContext';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminProfile = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, isLoading, user, getUser, logoutHandler } =
    authContext;
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <AdminDashboardSideBar>
        <section style={{ backgroundColor: '#eee', height: '100vh' }}>
          <div className="container py-5">
            <div className="row">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  className="card mb-4"
                  style={{
                    width: '70%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                  }}
                >
                  <div
                    className="card-body text-center"
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <img
                      src={ProfilePicture}
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: '150px' }}
                    />
                    <h5 className="my-3">{user?.name}</h5>
                    <p className="text-muted mb-1">{user?.email}</p>
                    <p className="text-muted mb-1">{user?.phone}</p>
                    <p className="text-muted mb-1">{user?.gender}</p>
                    {/* <p className="text-muted mb-1">{user?.city}</p> */}
                    <Link
                      to={'/forgetpassword'}
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      <Button
                        style={{ backgroundColor: 'black', color: 'white' }}
                      >
                        Change Password
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AdminDashboardSideBar>
    </>
  );
};

export default AdminProfile;
