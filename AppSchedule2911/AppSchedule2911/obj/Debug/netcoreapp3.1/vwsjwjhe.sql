IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [AdminRegister] (
    [Id] int NOT NULL IDENTITY,
    [AName] nvarchar(max) NULL,
    [Password] nvarchar(max) NULL,
    [Designation] nvarchar(max) NULL,
    CONSTRAINT [PK_AdminRegister] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Appointment] (
    [Id] int NOT NULL IDENTITY,
    [FName] nvarchar(max) NOT NULL,
    [LName] nvarchar(max) NOT NULL,
    [Email] nvarchar(max) NULL,
    [Mobile] nvarchar(10) NOT NULL,
    [Date] datetime2 NOT NULL,
    [Time] nvarchar(max) NULL,
    [Doctor] nvarchar(max) NULL,
    [Confirm] nvarchar(max) NULL,
    [UserName] nvarchar(max) NULL,
    CONSTRAINT [PK_Appointment] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Cancel] (
    [Id] int NOT NULL,
    [FName] nvarchar(max) NULL,
    [LName] nvarchar(max) NULL,
    [Email] nvarchar(max) NULL,
    [Mobile] nvarchar(max) NULL,
    [Date] datetime2 NOT NULL,
    [Time] nvarchar(max) NULL,
    [Doctor] nvarchar(max) NULL,
    [Confirm] nvarchar(max) NULL,
    CONSTRAINT [PK_Cancel] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Contact] (
    [CId] int NOT NULL IDENTITY,
    [CName] nvarchar(max) NULL,
    [CEmail] nvarchar(max) NULL,
    [CMessage] nvarchar(max) NULL,
    CONSTRAINT [PK_Contact] PRIMARY KEY ([CId])
);

GO

CREATE TABLE [Doctor] (
    [Did] int NOT NULL IDENTITY,
    [DName] nvarchar(max) NULL,
    [DSpecialization] nvarchar(max) NULL,
    CONSTRAINT [PK_Doctor] PRIMARY KEY ([Did])
);

GO

CREATE TABLE [Register] (
    [Uid] int NOT NULL IDENTITY,
    [Name] nvarchar(max) NULL,
    [UserName] nvarchar(max) NULL,
    [Password] nvarchar(max) NULL,
    [Email] nvarchar(max) NULL,
    [Phone] nvarchar(max) NULL,
    [DOB] datetime2 NOT NULL,
    CONSTRAINT [PK_Register] PRIMARY KEY ([Uid])
);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20221209102118_ForeignMig123', N'3.1.30');

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20221209104831_newmig', N'3.1.30');

GO

DECLARE @var0 sysname;
SELECT @var0 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Appointment]') AND [c].[name] = N'UserName');
IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [Appointment] DROP CONSTRAINT [' + @var0 + '];');
ALTER TABLE [Appointment] DROP COLUMN [UserName];

GO

ALTER TABLE [Appointment] ADD [RegisterUid] int NULL;

GO

ALTER TABLE [Appointment] ADD [Uid] int NOT NULL DEFAULT 0;

GO

CREATE INDEX [IX_Appointment_RegisterUid] ON [Appointment] ([RegisterUid]);

GO

ALTER TABLE [Appointment] ADD CONSTRAINT [FK_Appointment_Register_RegisterUid] FOREIGN KEY ([RegisterUid]) REFERENCES [Register] ([Uid]) ON DELETE NO ACTION;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20221210032759_v123', N'3.1.30');

GO

DECLARE @var1 sysname;
SELECT @var1 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Appointment]') AND [c].[name] = N'Uid');
IF @var1 IS NOT NULL EXEC(N'ALTER TABLE [Appointment] DROP CONSTRAINT [' + @var1 + '];');
ALTER TABLE [Appointment] DROP COLUMN [Uid];

GO

ALTER TABLE [Appointment] ADD [UserName] nvarchar(max) NULL;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20221210041838_v125', N'3.1.30');

GO

