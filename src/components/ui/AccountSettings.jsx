import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileAvatar from './ProfileAvatar';
import FormField from './FormField';
import PasswordField from './PasswordField';
import Button2 from './button2';
import axios from 'axios';

const AccountSettings = () => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setProfileData({
        fullName: user.full_name || '',
        email: user.email || '',
        phoneNumber: user.phone || ''
      });
    }
  }, []);

  const handleProfileChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
  };

  // ✅ Combined save handler
  const handleSaveAll = async () => {
    if (
      passwordData.newPassword !== '' &&
      passwordData.newPassword !== passwordData.confirmPassword
    ) {
      alert('❌ New passwords do not match.');
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`
      };

      // ✅ 1. Update Profile
      await axios.put(
        'http://localhost:9000/api/profile',
        {
          full_name: profileData.fullName,
          email: profileData.email,
          phone: profileData.phoneNumber
        },
        { headers }
      );

      // ✅ 2. Update Password (only if fields are filled)
      if (
        passwordData.currentPassword &&
        passwordData.newPassword &&
        passwordData.confirmPassword
      ) {
        await axios.patch(
          'http://localhost:9000/api/profile/password',
          {
            current_password: passwordData.currentPassword,
            password: passwordData.newPassword,
            password_confirmation: passwordData.confirmPassword
          },
          { headers }
        );
      }

      alert('✅ Profile and password updated!\nYou will now be logged out.');

      // ✅ Clear user session and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('❌ Failed to update profile or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl p-2 space-y-4 mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900">ACCOUNT SETTINGS</h1>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile</h2>
        <div className="flex items-start space-x-6 w-full">
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Full Name"
                value={profileData.fullName}
                onChange={(e) => handleProfileChange('fullName', e.target.value)}
              />
              <FormField
                label="Email"
                value={profileData.email}
                type="email"
                onChange={(e) => handleProfileChange('email', e.target.value)}
              />
              <FormField
                label="Phone Number"
                value={profileData.phoneNumber}
                type="tel"
                onChange={(e) => handleProfileChange('phoneNumber', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Password Change Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">CHANGE PASSWORD</h2>
        <div className="space-y-6">
          <PasswordField
            label="Current Password"
            value={passwordData.currentPassword}
            onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
          />
          <PasswordField
            label="New Password"
            value={passwordData.newPassword}
            onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
          />
          <PasswordField
            label="Confirm Password"
            value={passwordData.confirmPassword}
            onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
          />
        </div>
      </div>

      {/* ✅ One Save Button */}
      <div className="flex justify-end">
        <Button2 onClick={handleSaveAll}>
          {loading ? 'Saving...' : 'SAVE CHANGES'}
        </Button2>
      </div>
    </div>
  );
};

export default AccountSettings;
