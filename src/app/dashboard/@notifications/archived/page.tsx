import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotification() {
  return (
    <Card>
      Archived Notifications
      <p>
        <Link href="/dashboard">Go back to default</Link>
      </p>
    </Card>
  );
}
