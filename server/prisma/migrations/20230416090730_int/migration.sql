-- AddForeignKey
ALTER TABLE "todos" ADD CONSTRAINT "todos_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
