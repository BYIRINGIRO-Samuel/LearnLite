import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CreatedBy {
  name: string;
}

interface CreatedFor {
  name: string;
}

interface Notification {
  _id: string;
  createdBy: CreatedBy;
  title: string;
  message: string;
  type: string;
  createdFor: CreatedFor[];
  createdAt: string;
}

const AdminNoficationsSection: React.FC = () => {
  const navigate = useNavigate();

  // Mock data based on the provided backend format
  const mockNotifications: Notification[] = [
    {
        "_id": "683a09a89643dcc701012419",
        "createdBy": {
            "name": "Admin1 Doe"
        },
        "title": "Important Announcement for Everyone",
        "message": "Please be informed that the school will be closed tomorrow due to maintenance.",
        "type": "admin-announcement",
        "createdFor": [
            {
                "name": "Teacher1 Doe"
            },
            {
                "name": "Student1 Doe"
            }
        ],
        "createdAt": "2025-05-30T19:40:24.631Z",
    },
    {
        "_id": "683a09ec9643dcc70101242d",
        "createdBy": {
            "name": "Admin1 Doe"
        },
        "title": "Staff Meeting Reminder",
        "message": "All teachers are requested to attend the meeting in the conference hall at 3 PM today.",
        "type": "admin-announcement",
        "createdFor": [
            {
                "name": "Teacher1 Doe"
            }
        ],
        "createdAt": "2025-05-30T19:41:32.366Z",
    },
    {
        "_id": "683a0b6dacd04458eb5be1ec",
        "createdBy": {
            "name": "Admin1 Doe"
        },
        "title": "Account approved", // Assuming this title might be misleading for a pending approval
        "message": "Your account has been approved by Admin1 Doe from Primary Alpha Academy", // Assuming this message might be misleading for a pending approval
        "type": "approval",
        "createdFor": [
            {
                "name": "Teacher1 Doe" // This is the teacher who needs approval
            }
        ],
        "createdAt": "2025-05-30T19:47:57.212Z",
    },
    {
        "_id": "683a0b6dacd04458eb5be1ed",
        "createdBy": {
            "name": "Admin2 Doe"
        },
        "title": "Account approval request",
        "message": "Teacher Emily Johnson is requesting account approval.",
        "type": "approval",
        "createdFor": [
            {
                "name": "Emily Johnson"
            }
        ],
        "createdAt": "2025-06-01T10:00:00.000Z",
    },
    {
        "_id": "683a0b6dacd04458eb5be1ee",
        "createdBy": {
            "name": "Admin3 Doe"
        },
        "title": "Account approval request",
        "message": "Teacher Michael Brown is requesting account approval.",
        "type": "approval",
        "createdFor": [
            {
                "name": "Michael Brown"
            }
        ],
        "createdAt": "2025-06-01T11:00:00.000Z",
    },
    {
        "_id": "683a0b6dacd04458eb5be1ef",
        "createdBy": {
            "name": "Admin4 Doe"
        },
        "title": "Account approval request",
        "message": "Teacher Sarah Davis is requesting account approval.",
        "type": "approval",
        "createdFor": [
            {
                "name": "Sarah Davis"
            }
        ],
        "createdAt": "2025-06-01T12:00:00.000Z",
    },
    {
        "_id": "683a0b6dacd04458eb5be1f0",
        "createdBy": {
            "name": "Admin5 Doe"
        },
        "title": "Account approval request",
        "message": "Teacher David Wilson is requesting account approval.",
        "type": "approval",
        "createdFor": [
            {
                "name": "David Wilson"
            }
        ],
        "createdAt": "2025-06-01T13:00:00.000Z",
    }
  ];

  // Filter for approval notifications
  const approvalNotifications = mockNotifications.filter(notification => notification.type === 'approval');

  const handleReviewClick = (notificationId: string) => {
    // In a real application, you might pass the notificationId or teacherId to the teachers page
    console.log(`Reviewing teacher for notification: ${notificationId}`);
    navigate('/admin/teachers');
  };

  return (
    <div className="max-w-2xl p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h1>
      <div className="space-y-4">
        {approvalNotifications.map(notification => (
          <div
            key={notification._id}
            className="flex items-start space-x-3 bg-white shadow-md rounded-lg p-4 border border-gray-200 cursor-pointer"
            onClick={() => handleReviewClick(notification._id)}
          >
            {/* Avatar */}
            <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500 font-medium text-sm">
                {notification.createdFor[0]?.name.split(' ').map(n => n[0]).join('') || ''}
              </span>
            </div>

            {/* Notification Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="text-sm font-semibold text-gray-800">Tr.{notification.createdFor[0]?.name || ''}</div>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the card click from firing
                    handleReviewClick(notification._id);
                  }}
                  className="text-blue-600 hover:text-blue-900 text-xs font-medium focus:outline-none focus:underline"
                >
                  Review Teacher
                </button>
              </div>
              <div className="text-gray-700 text-sm">
                needs approval to join your school
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminNoficationsSection;

