import React, { useState, useEffect } from 'react';
import ProfileAvatar from './ProfileAvatar';
import FormField from './FormField';
import PasswordField from './PasswordField';
import Button2 from './button2';
import axios from 'axios';

const AccountSettings = () => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Load user data from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setProfileData({
        fullName: storedUser.full_name || '',
        email: storedUser.email || '',
        phoneNumber: storedUser.phone || ''
      });
    }
  }, []);

  // Handle input changes
  const handleProfileChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
  };

  // Handle profile update
  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put(
        'http://localhost:9000/api/profile',
        {
          full_name: profileData.fullName,
          email: profileData.email,
          phone: profileData.phoneNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      // ✅ Update localStorage after successful save
      localStorage.setItem('user', JSON.stringify(res.data));

      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('Failed to update profile.');
    }
  };

  // Handle password update
  const handleChangePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New password and confirmation do not match.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.patch(
        'http://localhost:9000/api/profile/password',
        {
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert('Password changed successfully!');
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error) {
      console.error('Failed to change password:', error);
      alert('Failed to change password.');
    }
  };

  return (
    <div className="max-w-4xl p-2 space-y-4 mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900">ACCOUNT SETTINGS</h1>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile</h2>
        <div className="flex items-start space-x-6 w-full">
          <ProfileAvatar size="large" />
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
                onChange={(e) => handleProfileChange('email', e.target.value)}
                type="email"
              />
              <FormField
                label="Phone Number"
                value={profileData.phoneNumber}
                onChange={(e) => handleProfileChange('phoneNumber', e.target.value)}
                type="tel"
              />
            </div>
            <div className="flex justify-end">
              <Button2 onClick={handleSaveChanges}>SAVE CHANGES</Button2>
            </div>
          </div>
        </div>
      </div>

      {/* Password Section */}
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
            placeholder="8+ characters"
          />
          <PasswordField
            label="Confirm Password"
            value={passwordData.confirmPassword}
            onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
          />
          <div className="flex justify-end">
            <Button2 onClick={handleChangePassword}>CHANGE PASSWORD</Button2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
