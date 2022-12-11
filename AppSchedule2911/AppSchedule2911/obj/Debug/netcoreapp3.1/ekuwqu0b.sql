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
    [Uid] int NOT NULL,
    [RegisterUid] int NULL,
    CONSTRAINT [PK_Appointment] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Appointment_Register_RegisterUid] FOREIGN KEY ([RegisterUid]) REFERENCES [Register] ([Uid]) ON DELETE NO ACTION
);

GO

CREATE INDEX [IX_Appointment_RegisterUid] ON [Appointment] ([RegisterUid]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20221209090713_ForeignMig', N'3.1.30');

GO

